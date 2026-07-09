import React, { useEffect, useRef } from 'react';

export const BlockchainBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let blocks = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Block {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 15;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01 + Math.random() * 0.01;
        
        const colors = [
          { r: 255, g: 215, b: 0 },
          { r: 255, g: 200, b: 50 },
          { r: 255, g: 180, b: 0 },
          { r: 240, g: 200, b: 80 },
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.color = `rgba(${color.r}, ${color.g}, ${color.b}, `;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.pulse += this.pulseSpeed;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        const pulseFactor = 0.5 + Math.sin(this.pulse) * 0.3;
        return pulseFactor;
      }

      draw(ctx, pulseFactor) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        const size = this.size;
        const halfSize = size / 2;
        
        const baseOpacity = this.opacity * 0.7;
        ctx.fillStyle = this.color + (baseOpacity * pulseFactor) + ')';
        ctx.shadowColor = `rgba(255, 215, 0, ${baseOpacity * 0.3})`;
        ctx.shadowBlur = 15;
        ctx.fillRect(-halfSize, -halfSize, size, size);
        
        ctx.strokeStyle = this.color + (baseOpacity * 0.6 * pulseFactor) + ')';
        ctx.lineWidth = 2;
        ctx.strokeRect(-halfSize, -halfSize, size, size);
        
        const dotCount = 4;
        for (let i = 0; i < dotCount; i++) {
          const angle = (i / dotCount) * Math.PI * 2;
          const radius = size * 0.7;
          const dotX = Math.cos(angle) * radius;
          const dotY = Math.sin(angle) * radius;
          
          ctx.beginPath();
          ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
          ctx.fillStyle = this.color + (baseOpacity * 0.5 * pulseFactor) + ')';
          ctx.fill();
        }
        
        ctx.beginPath();
        for (let i = 0; i < dotCount; i++) {
          const angle = (i / dotCount) * Math.PI * 2;
          const radius = size * 0.7;
          const dotX = Math.cos(angle) * radius;
          const dotY = Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(dotX, dotY);
          } else {
            ctx.lineTo(dotX, dotY);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = this.color + (baseOpacity * 0.3 * pulseFactor) + ')';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    const numBlocks = Math.min(40, Math.floor((canvas.width * canvas.height) / 50000));
    for (let i = 0; i < numBlocks; i++) {
      blocks.push(new Block());
    }

    const drawConnections = (ctx) => {
      for (let i = 0; i < blocks.length; i++) {
        for (let j = i + 1; j < blocks.length; j++) {
          const dx = blocks[i].x - blocks[j].x;
          const dy = blocks[i].y - blocks[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.2;
            ctx.beginPath();
            ctx.moveTo(blocks[i].x, blocks[i].y);
            ctx.lineTo(blocks[j].x, blocks[j].y);
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawConnections(ctx);
      
      blocks.forEach(block => {
        const pulseFactor = block.update();
        block.draw(ctx, pulseFactor);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default BlockchainBackground;
