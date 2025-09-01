import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Clock, Users, Play } from 'lucide-react';

const SubjectCards = () => {
  const subjects = [
    {
      id: 1,
      name: 'الرياضيات',
      description: 'التفاضل والتكامل والجبر',
      units: 8,
      lessons: 45,
      students: 1200,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      id: 2,
      name: 'الفيزياء', 
      description: 'الميكانيكا والكهرباء والضوء',
      units: 6,
      lessons: 38,
      students: 950,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    {
      id: 3,
      name: 'الكيمياء',
      description: 'الكيمياء العضوية وغير العضوية',
      units: 7,
      lessons: 42,
      students: 800,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    },
    {
      id: 4,
      name: 'الأحياء',
      description: 'علم الوراثة والخلية والبيئة',
      units: 9,
      lessons: 52,
      students: 1100,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    {
      id: 5,
      name: 'اللغة العربية',
      description: 'النحو والصرف والأدب',
      units: 5,
      lessons: 35,
      students: 1500,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      id: 6,
      name: 'التاريخ',
      description: 'التاريخ الإسلامي والحديث',
      units: 4,
      lessons: 28,
      students: 750,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700'
    },
    {
      id: 7,
      name: 'الجغرافيا',
      description: 'الجغرافيا الطبيعية والبشرية',
      units: 6,
      lessons: 32,
      students: 680,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 8,
      name: 'الإنجليزية',
      description: 'القواعد والمحادثة والكتابة',
      units: 8,
      lessons: 48,
      students: 1350,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    }
  ];

  return (
    <section id="subjects" className="section-padding">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center space-y-4 mb-12" dir="rtl">
          <h2 className="text-3xl font-bold text-gradient">
            اختر مادتك
          </h2>
          <p className="text-muted-foreground text-lg">
            ابدأ رحلتك الدراسية مع المادة التي تريد تعلمها
          </p>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className={`h-20 bg-gradient-to-r ${subject.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4">
                  <BookOpen className="h-6 w-6 text-white/90" />
                </div>
                <div className="absolute bottom-3 right-4">
                  <h3 className="text-white font-bold text-xl">
                    {subject.name}
                  </h3>
                </div>
              </div>

              <CardContent className={`p-4 ${subject.bgColor}`}>
                <div className="space-y-4">
                  {/* Description */}
                  <p className={`text-sm ${subject.textColor}/80`} dir="rtl">
                    {subject.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between" dir="rtl">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${subject.color}`}></div>
                        <span className={`text-sm font-medium ${subject.textColor}`}>
                          الوحدات
                        </span>
                      </div>
                      <span className={`text-lg font-bold ${subject.textColor}`}>
                        {subject.units}
                      </span>
                    </div>

                    <div className="flex items-center justify-between" dir="rtl">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Play className={`h-3 w-3 ${subject.textColor}`} />
                        <span className={`text-sm font-medium ${subject.textColor}`}>
                          الدروس
                        </span>
                      </div>
                      <span className={`text-lg font-bold ${subject.textColor}`}>
                        {subject.lessons}
                      </span>
                    </div>

                    <div className="flex items-center justify-between" dir="rtl">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Users className={`h-3 w-3 ${subject.textColor}/70`} />
                        <span className={`text-xs ${subject.textColor}/70`}>
                          الطلاب
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${subject.textColor}/70`}>
                        {subject.students}+
                      </span>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-4 pt-3 border-t border-white/30">
                    <div className="flex items-center justify-between" dir="rtl">
                      <span className={`text-xs ${subject.textColor}/70`}>
                        ابدأ الآن
                      </span>
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center`}>
                        <Play className="h-3 w-3 text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectCards;