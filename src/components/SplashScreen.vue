<template>
  <div
    v-if="visible"
    ref="root"
    class="splash font-clash uppercase"
    role="status"
    aria-label="Splash screen"
  >
    <div class="preloader">
      <div class="intro">
        <h1 ref="nameRef" class="authorName">{{ name }}</h1>
      </div>

      <div class="outro">
        <h1>7</h1>
      </div>
    </div>

    <div class="split-overlay">
      <div class="intro">
        <h1 ref="splitNameRef" class="authorName">{{ name }}</h1>
      </div>

      <div class="outro">
        <h1>7</h1>
      </div>
    </div>

    <div class="tags-overlay">
      <div class="tag tag-1"><p>Software Engineer</p></div>
      <div class="tag tag-2"><p>Indie Game Dev</p></div>
      <div class="tag tag-3"><p>Mobile Dev</p></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType, { TypesList } from "split-type";
import useSplashScreenStatus from "../composables/useSplashScreenStatus";

// const { setSplashScreenFinished } = useSplashScreenStatus();

const name = "Mayweda Dev"; // change to your preferred display name
const root = ref(null);
const nameRef = ref(null);
const splitNameRef = ref(null);
const visible = ref(true);

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", ".8, 0, .3, 1");

let onWindowLoad;

const splitTextElements = (
  element: HTMLElement,
  types = "words,chars",
  addFirstCharClass = true
) => {
  const split = new SplitType(element, {
    types: types as TypesList,
    wordClass: "word",
    charClass: "char",
  });

  // Wrap each character in a span for animation
  if (types.includes("chars")) {
    const chars = (split.chars ?? []) as HTMLElement[];
    chars.forEach((char: HTMLElement, index) => {
      const span = document.createElement("span");
      span.innerText = char.innerText;
      char.innerText = "";
      char.appendChild(span);

      if (addFirstCharClass && index === 0) {
        char.classList.add("first-char");
      }
    });
  }
};

onMounted(() => {
  splitTextElements((nameRef.value ?? {}) as HTMLElement, "words,chars", true);
  splitTextElements((splitNameRef.value ?? {}) as HTMLElement);
  document.querySelectorAll(".tags-overlay .tag p").forEach((el) => {
    splitTextElements(el as HTMLElement, "words,chars", true);
  });

  const isMobile = window.matchMedia("(max-width: 1000px)").matches;

  // gsap.set([".intro h1 .first-char span"], { y: "0%" });

  // gsap.set(".intro h1 .first-char", {
  //   // x: isMobile ? "7.5rem" : "18rem",
  //   // y: isMobile ? "-1rem" : "-2.75rem",
  //   fontWeight: "900",
  //   // scale: 0.75,
  // });

  gsap.set(".outro h1", {
    // x: isMobile ? "-3rem" : "-8rem",
    y: "-100%",
    // fontSize: isMobile ? "6rem" : "14rem",
    fontWeight: "500",
  });

  const tl = gsap.timeline({
    defaults: { ease: "hop" },
    // onComplete: () => {
    //   visible.value = false;
    //   // console.log("splash animation complete");
    //   setSplashScreenFinished();
    // },
  });

  const tags = gsap.utils.toArray(".tags-overlay .tag") as HTMLElement[];

  tags.forEach((tag, index) => {
    tl.to(
      tag.querySelectorAll("p .word"),
      {
        y: "0%",

        duration: 0.75,
      },
      0.5 + index * 0.1
    );
  });

  tl.to(
    ".intro h1 .char span",
    {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
    },
    0.5
  )
    .to(
      ".intro .char:not(.first-char) span",
      {
        y: "100%",
        duration: 0.75,
        stagger: 0.05,
      },
      2
    )
    .to(
      ".outro h1",
      {
        y: "0%",
        duration: 0.75,
        stagger: 0.075,
      },
      2.25
    )
    .to(
      ".intro .first-char",
      {
        x: "17.8rem",
        duration: 1,
      },
      3.5
    )
    // .to(
    //   ".outro h1",
    //   {

    //     duration: 1,
    //   },
    //   3.5
    // )
    .to(
      ".intro .first-char",
      {
        x: "18rem",
        y: "-2.75rem",
        // fontWeight: "900",
        scale: 0.75,
        duration: 0.75,
      },
      4.5
    )
    .to(
      ".outro h1",
      {
        // x: isMobile ? "-3rem" : "-8rem",
        x: "-2rem",
        fontSize: "14rem",

        fontWeight: "500",
        duration: 0.75,
        onComplete: () => {
          gsap.set(".preloader", {
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
          });
          gsap.set(".split-overlay", {
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
          });
        },
      },
      4.5
    );

  tags.forEach((tag, index) => {
    tl.to(
      tag.querySelectorAll("p .word"),
      {
        y: "100%",

        duration: 0.75,
      },
      5.5 + index * 0.1
    );
  });

  tl.to(
    [".preloader", ".split-overlay"],
    {
      y: (i) => (i === 0 ? "-50%" : "50%"),
      duration: 1,
      // onComplete: () => {
      //     visible.value = false;
      //     // console.log("splash animation complete");
      //     setSplashScreenFinished();
      // }
    },
    6
  );
  // Intro animation (plays immediately on mount)
  //   gsap.from(nameRef.value, {
  //     opacity: 0,
  //     y: 30,
  //     duration: 0.8,
  //     ease: "power2.out",
  //   });

  // When the window is fully loaded, animate the name sliding up and remove the splash
  //   onWindowLoad = () => {
  //     const tl = gsap.timeline({
  //       defaults: { ease: "power3.inOut" },
  //       onComplete: () => {
  //         visible.value = false;
  //         // console.log("splash animation complete");
  //         setSplashScreenFinished();
  //       },
  //     });

  //     // slide the name up out of the viewport
  //     tl.to(nameRef.value, { y: "-120vh", duration: 1.1 });
  //     // fade and slightly scale the background for smoother transition
  //     tl.to(root.value, { opacity: 0, duration: 0.6 }, 0.7);
  //   };

  // If the load already fired before this component mounted, window.onload may not fire.
  // Use readyState check to handle that case.
  //   if (document.readyState === "complete") {
  //     // give a tiny delay so the intro is visible briefly
  //     // console.log("window already loaded");
  //     setTimeout(() => onWindowLoad(), 200);
  //   } else {
  //     console.log("adding window load listener");
  //     window.addEventListener("load", onWindowLoad);
  //   }

  //   return () => {
  //     // console.log("cleaning up splash screen listeners --");
  //     if (onWindowLoad) window.removeEventListener("load", onWindowLoad);
  //   };
});
</script>

<style>
.preloader,
.split-overlay,
.tags-overlay {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
}

.preloader,
.split-overlay {
  background: #e11717;
  color: black;
}

.preloader,
.tags-overlay {
  z-index: 200;
}

.split-overlay {
  z-index: 100;
}

.intro {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

.outro {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}

.tags-overlay .tag {
  position: absolute;
  /* background: #0a0a0a; */
  width: max-content;
  /* color: #5a5a5a; */
  overflow: hidden;
}

.tag-1 {
  top: 15%;
  left: 15%;
}

.tag-2 {
  bottom: 15%;
  right: 25%;
}
.tag-3 {
  top: 30%;
  right: 15%;
}

.authorName {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}

.authorName,
.outro h1 {
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  line-height: 1;
  font-size: 6rem;
  transform-origin: center;
  will-change: transform, opacity;
  padding: 0.25rem 0.5rem;
  user-select: none;
  pointer-events: none;
}

.authorName .char,
.outro h1 {
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-top: 0.75rem;
}

.authorName .char span,
.outro h1 {
  display: inline-block;
  transform: translateY(100%);
  will-change: transform;
}

.authorName .first-char {
  transform-origin: top left;
}

.preloader::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: red;
}

@media screen and (max-width: 1000px) {
  .outro h1 {
    left: calc(50% + 4rem);
  }

  .authorName .char,
  .outro h1 .char {
    margin-top: 0.5rem;
  }
}
</style>
