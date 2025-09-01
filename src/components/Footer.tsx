import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    platform: [
      { name: 'الرئيسية', href: '#' },
      { name: 'الأقسام', href: '#sections' },
      { name: 'الوسوم', href: '#tags' },
      { name: 'نبذة عني', href: '#about' },
    ],
    content: [
      { name: 'البرمجة', href: '#' },
      { name: 'قواعد البيانات', href: '#' },
      { name: 'تصميم الواجهات', href: '#' },
      { name: 'الذكاء الاصطناعي', href: '#' },
    ],
    support: [
      { name: 'مركز المساعدة', href: '#' },
      { name: 'الأسئلة الشائعة', href: '#' },
      { name: 'اتصل بنا', href: '#' },
      { name: 'سياسة الخصوصية', href: '#' },
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-600' },
    { name: 'Email', icon: Mail, href: '#', color: 'hover:text-green-500' },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container-responsive">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6" dir="rtl">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gradient">ملخصاتي</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                منصة تعليمية عربية متطورة تهدف إلى تسهيل عملية التعلم من خلال 
                ملخصات شاملة ومنظمة في مختلف المجالات التقنية والأكاديمية.
              </p>

              <div className="flex space-x-3 rtl:space-x-reverse">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-colors duration-200 hover:shadow-soft`}
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div dir="rtl">
              <h3 className="font-semibold mb-4 text-foreground">المنصة</h3>
              <ul className="space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div dir="rtl">
              <h3 className="font-semibold mb-4 text-foreground">المحتوى</h3>
              <ul className="space-y-2">
                {footerLinks.content.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div dir="rtl">
              <h3 className="font-semibold mb-4 text-foreground">الدعم</h3>
              <ul className="space-y-2 mb-6">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <ArrowUp className="h-4 w-4 ml-2" />
                العودة للأعلى
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground" dir="rtl">
              © 2024 ملخصاتي. جميع الحقوق محفوظة.
            </div>
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
              <span dir="rtl">صُنع بـ</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span dir="rtl">في العالم العربي</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;