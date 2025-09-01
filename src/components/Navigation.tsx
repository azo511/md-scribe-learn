import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, BookOpen, Tag, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#', icon: BookOpen },
    { name: 'الأقسام', href: '#sections', icon: BookOpen },
    { name: 'الوسوم', href: '#tags', icon: Tag },
    { name: 'نبذة عني', href: '#about', icon: User },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">ملخصاتي</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4 ml-2" />
              بحث
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/30">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Search className="h-4 w-4 ml-2" />
                  بحث في المحتوى
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;