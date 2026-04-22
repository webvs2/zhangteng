<template>
  <div class="skill-radar">
    <div class="radar-container">
      <canvas ref="radarCanvas" :width="canvasSize" :height="canvasSize"></canvas>
    </div>
    <div class="skill-legend">
      <div class="legend-item" v-for="(skill, index) in skills" :key="index">
        <span class="legend-color" :style="{ background: skill.color }"></span>
        <span class="legend-name">{{ skill.name }}</span>
        <span class="legend-value">{{ skill.value }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillRadar',
  data() {
    return {
      canvasSize: 300,
      skills: [
        { name: 'Java后端', value: 95, color: '#667eea' },
        { name: '数据库', value: 90, color: '#764ba2' },
        { name: '框架应用', value: 92, color: '#f093fb' },
        { name: '项目管理', value: 85, color: '#f5576c' },
        { name: '前端开发', value: 75, color: '#4facfe' },
        { name: '系统架构', value: 88, color: '#00f2fe' }
      ],
      animationProgress: 0,
      animationId: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
      this.animate()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    cancelAnimationFrame(this.animationId)
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 768) {
        this.canvasSize = 250
      } else {
        this.canvasSize = 300
      }
      this.$nextTick(() => {
        this.drawRadar()
      })
    },
    animate() {
      const duration = 1500
      const startTime = Date.now()
      
      const step = () => {
        const elapsed = Date.now() - startTime
        this.animationProgress = Math.min(elapsed / duration, 1)
        
        // 使用 easeOutQuart 缓动函数
        const easeProgress = 1 - Math.pow(1 - this.animationProgress, 4)
        this.drawRadar(easeProgress)
        
        if (this.animationProgress < 1) {
          this.animationId = requestAnimationFrame(step)
        }
      }
      
      step()
    },
    drawRadar(progress = 1) {
      const canvas = this.$refs.radarCanvas
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      const centerX = this.canvasSize / 2
      const centerY = this.canvasSize / 2
      const radius = (this.canvasSize / 2) - 40
      const angleStep = (Math.PI * 2) / this.skills.length
      
      ctx.clearRect(0, 0, this.canvasSize, this.canvasSize)
      
      // 绘制网格
      const levels = 5
      for (let i = 1; i <= levels; i++) {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)'
        ctx.lineWidth = 1
        
        for (let j = 0; j <= this.skills.length; j++) {
          const angle = j * angleStep - Math.PI / 2
          const r = (radius / levels) * i
          const x = centerX + Math.cos(angle) * r
          const y = centerY + Math.sin(angle) * r
          
          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.stroke()
      }
      
      // 绘制轴线
      for (let i = 0; i < this.skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)'
        ctx.lineWidth = 1
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
      
      // 绘制数据区域
      ctx.beginPath()
      for (let i = 0; i <= this.skills.length; i++) {
        const skillIndex = i % this.skills.length
        const skill = this.skills[skillIndex]
        const angle = skillIndex * angleStep - Math.PI / 2
        const value = skill.value * progress
        const r = (value / 100) * radius
        const x = centerX + Math.cos(angle) * r
        const y = centerY + Math.sin(angle) * r
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      
      // 填充渐变
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
      gradient.addColorStop(0, 'rgba(102, 126, 234, 0.3)')
      gradient.addColorStop(1, 'rgba(118, 75, 162, 0.1)')
      ctx.fillStyle = gradient
      ctx.fill()
      
      // 绘制边框
      ctx.strokeStyle = 'rgba(102, 126, 234, 0.8)'
      ctx.lineWidth = 2
      ctx.stroke()
      
      // 绘制数据点
      for (let i = 0; i < this.skills.length; i++) {
        const skill = this.skills[i]
        const angle = i * angleStep - Math.PI / 2
        const value = skill.value * progress
        const r = (value / 100) * radius
        const x = centerX + Math.cos(angle) * r
        const y = centerY + Math.sin(angle) * r
        
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fillStyle = skill.color
        ctx.fill()
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 2
        ctx.stroke()
      }
      
      // 绘制标签
      ctx.font = '12px "Noto Sans SC", sans-serif'
      ctx.fillStyle = '#64748b'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      for (let i = 0; i < this.skills.length; i++) {
        const skill = this.skills[i]
        const angle = i * angleStep - Math.PI / 2
        const labelRadius = radius + 25
        const x = centerX + Math.cos(angle) * labelRadius
        const y = centerY + Math.sin(angle) * labelRadius
        
        ctx.fillStyle = skill.color
        ctx.font = 'bold 12px "Noto Sans SC", sans-serif'
        ctx.fillText(skill.name, x, y)
      }
    }
  }
}
</script>

<style scoped>
.skill-radar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.radar-container {
  position: relative;
}

.radar-container canvas {
  display: block;
}

.skill-legend {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
  width: 100%;
  max-width: 280px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.legend-color {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-name {
  color: var(--text-secondary);
  flex: 1;
}

.legend-value {
  color: var(--text-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .skill-legend {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 15px;
  }
  
  .legend-item {
    font-size: 12px;
  }
}
</style>
