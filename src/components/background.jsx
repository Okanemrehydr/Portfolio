import { useEffect, useRef } from "react";

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        twinkle: Math.random() * 0.005 + 0.002,
        isStar: Math.random() < 0.3,
      });
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;

        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        particle.opacity += particle.twinkle;

        if (particle.opacity >= 1 || particle.opacity <= 0.2) {
          particle.twinkle *= -1;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.shadowColor = "cyan";
        ctx.shadowBlur = 6;
        ctx.fill();
        if (particle.isStar) {
          ctx.beginPath();

          ctx.moveTo(particle.x - 3, particle.y);
          ctx.lineTo(particle.x + 3, particle.y);

          ctx.moveTo(particle.x, particle.y - 3);
          ctx.lineTo(particle.x, particle.y + 3);

          ctx.strokeStyle = `rgba(34, 211, 238, ${particle.opacity})`;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>
    </div>
  );
}

export default Background;
