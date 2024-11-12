import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ChevronLeft,
  Image,
  User,
  Menu,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Gallery', icon: Image },
    { path: '/about', label: 'About', icon: User },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-card shadow-xl transition-all duration-300',
        isOpen ? 'w-64' : 'w-20'
      )}
    >
      <div className="flex h-full flex-col border-r">
        <div className="flex h-16 items-center justify-between px-4">
          {isOpen && (
            <h1 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-xl font-bold text-transparent">
              Portfolio
            </h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={cn('ml-auto transition-transform', !isOpen && 'rotate-180')}
          >
            {isOpen ? <ChevronLeft /> : <Menu />}
          </Button>
        </div>
        
        <nav className="flex-1 space-y-2 p-4">
          <TooltipProvider>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Tooltip key={item.path}>
                  <TooltipTrigger asChild>
                    <Link to={item.path}>
                      <Button
                        variant={isActive ? 'secondary' : 'ghost'}
                        className={cn(
                          'w-full justify-start transition-colors',
                          isActive && 'bg-secondary font-medium'
                        )}
                      >
                        <Icon className={cn('h-5 w-5', !isOpen && 'mx-auto')} />
                        {isOpen && (
                          <span className="ml-3 text-sm">{item.label}</span>
                        )}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  {!isOpen && (
                    <TooltipContent side="right">
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </nav>
      </div>
    </aside>
  );
}