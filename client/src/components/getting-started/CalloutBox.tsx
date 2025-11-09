interface CalloutBoxProps {
  type: 'info' | 'warning' | 'success' | 'danger';
  text: string;
}

const typeStyles = {
  info: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    emoji: 'ℹ️',
  },
  warning: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    emoji: '⚠️',
  },
  success: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
    emoji: '✅',
  },
  danger: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    emoji: '🚨',
  },
};

export function CalloutBox({ type, text }: CalloutBoxProps) {
  const styles = typeStyles[type];

  return (
    <div
      className={`p-6 ${styles.bg} border-2 ${styles.border} rounded-lg my-6`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{styles.emoji}</span>
        <p className={`text-sm leading-relaxed ${styles.text}`}>
          {text}
        </p>
      </div>
    </div>
  );
}
