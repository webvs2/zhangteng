<template>
  <div class="typewriter">
    <span class="typewriter-text">{{ displayText }}</span>
    <span class="typewriter-cursor" :class="{ 'cursor-blink': isBlinking }"></span>
  </div>
</template>

<script>
export default {
  name: 'TypeWriter',
  props: {
    texts: {
      type: Array,
      required: true
    },
    speed: {
      type: Number,
      default: 100
    },
    pause: {
      type: Number,
      default: 2000
    },
    deleteSpeed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      displayText: '',
      currentIndex: 0,
      currentTextIndex: 0,
      isDeleting: false,
      isBlinking: true,
      timer: null
    }
  },
  mounted() {
    this.startTyping()
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    startTyping() {
      const currentText = this.texts[this.currentTextIndex]
      
      if (this.isDeleting) {
        this.displayText = currentText.substring(0, this.currentIndex - 1)
        this.currentIndex--
      } else {
        this.displayText = currentText.substring(0, this.currentIndex + 1)
        this.currentIndex++
      }

      let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed

      if (!this.isDeleting && this.currentIndex === currentText.length) {
        typeSpeed = this.pause
        this.isBlinking = true
        this.isDeleting = true
      } else if (this.isDeleting && this.currentIndex === 0) {
        this.isDeleting = false
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length
        typeSpeed = 500
        this.isBlinking = false
      } else {
        this.isBlinking = false
      }

      this.timer = setTimeout(this.startTyping, typeSpeed)
    }
  }
}
</script>

<style scoped>
.typewriter {
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  color: var(--text-secondary);
  min-height: 40px;
}

.typewriter-text {
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typewriter-cursor {
  display: inline-block;
  width: 3px;
  height: 24px;
  background: var(--primary-color);
  margin-left: 4px;
  border-radius: 2px;
}

.cursor-blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@media (max-width: 768px) {
  .typewriter {
    font-size: 18px;
    min-height: 30px;
  }
  
  .typewriter-cursor {
    height: 18px;
  }
}
</style>
