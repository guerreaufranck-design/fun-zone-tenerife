'use client';

import { useRef, useEffect, useCallback } from 'react';
import SignaturePadLib from 'signature_pad';
import { Eraser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

interface SignaturePadProps {
  onChange: (dataUrl: string | null) => void;
  error?: boolean;
}

export default function SignaturePad({ onChange, error = false }: SignaturePadProps) {
  const t = useTranslations('waiver');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePadLib | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const width = container.clientWidth;
    const height = 180;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(ratio, ratio);
    }

    // Clear pad after resize to avoid distorted strokes
    if (padRef.current) {
      padRef.current.clear();
      onChange(null);
    }
  }, [onChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const pad = new SignaturePadLib(canvas, {
      backgroundColor: 'rgb(15, 15, 20)',
      penColor: 'rgb(255, 255, 255)',
      minWidth: 1.5,
      maxWidth: 3,
    });

    pad.addEventListener('endStroke', () => {
      if (!pad.isEmpty()) {
        onChange(pad.toDataURL('image/png'));
      }
    });

    padRef.current = pad;
    resizeCanvas();

    const observer = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      pad.off();
      observer.disconnect();
    };
  }, [onChange, resizeCanvas]);

  const handleClear = () => {
    if (padRef.current) {
      padRef.current.clear();
      onChange(null);
    }
  };

  return (
    <div className="space-y-2">
      <div
        ref={containerRef}
        className={`relative rounded-lg border-2 overflow-hidden ${
          error ? 'border-red-500' : 'border-border'
        }`}
      >
        <canvas
          ref={canvasRef}
          className="w-full cursor-crosshair"
          style={{ touchAction: 'none' }}
        />
        {/* Instruction overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <p className="text-sm text-muted-foreground italic">
            {t('signatureInstruction')}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className="gap-1.5 text-muted-foreground hover:text-foreground"
        >
          <Eraser className="h-3.5 w-3.5" />
          {t('signatureClear')}
        </Button>
      </div>
    </div>
  );
}
