// ════════════════════════════════════════════════════════════
//  Skeleton components — premium loading states
// ════════════════════════════════════════════════════════════
import { Loader2 } from 'lucide-react';

export const PageLoader = ({ label = 'Loading…' }) => (
  <div className="flex flex-col items-center justify-center min-h-[40vh] gap-3 animate-fadeIn">
    <Loader2 className="animate-spin" size={28} style={{ color: 'var(--brand-orange, #ff6d34)' }} />
    <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>{label}</p>
  </div>
);

export const EmptyState = ({ icon: Icon, title, description, action }) => (
  <div className="rounded-2xl p-12 text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
    {Icon && (
      <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-3" style={{ background: 'var(--input-bg)' }}>
        <Icon size={26} style={{ color: 'var(--muted)' }} />
      </div>
    )}
    <h3 className="text-base font-bold" style={{ color: 'var(--text)' }}>{title}</h3>
    {description && <p className="text-sm mt-1 max-w-md mx-auto" style={{ color: 'var(--muted)' }}>{description}</p>}
    {action && <div className="mt-4">{action}</div>}
  </div>
);
