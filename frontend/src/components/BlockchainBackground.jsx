import React, { useEffect, useRef } from 'react';

export const BlockchainBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Terminal nodes
    const nodes = [];
    const nodeCount = 80;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1
      });
    }

    // Circuit lines
    const circuits = [];
    for (let i = 0; i < 15; i++) {
      circuits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw circuit lines
      circuits.forEach(circuit => {
        ctx.save();
        ctx.translate(circuit.x, circuit.y);
        ctx.rotate(circuit.angle);
        
        const gradient = ctx.createLinearGradient(0, 0, circuit.length, 0);
        gradient.addColorStop(0, `rgba(245, 158, 11, 0)`);
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${circuit.opacity})`);
        gradient.addColorStop(1, `rgba(245, 158, 11, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(circuit.length, 0);
        ctx.stroke();
        
        ctx.restore();

        circuit.angle += circuit.speed * 0.002;
        circuit.opacity = Math.sin(Date.now() * 0.001 + circuit.speed) * 0.2 + 0.2;
      });

      // Draw and update nodes
      nodes.forEach((node, i) => {
        // Draw node
        ctx.fillStyle = 'rgba(245, 158, 11, 0.6)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.strokeStyle = `rgba(245, 158, 11, ${0.15 * (1 - distance / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
