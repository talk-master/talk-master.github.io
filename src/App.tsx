/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Mail,
  MessageSquare,
  Download,
  CreditCard,
  Info,
  Menu,
  X,
  ChevronLeft,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Wallet,
  Smartphone,
  Instagram,
  TabletSmartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // { name: 'Payments', href: '#payments' },
  const navLinks = [
    { name: 'عن الشركة', href: '#about' },
    { name: 'الكتاب الالكتروني', href: '#ebook' },
    { name: 'الامتحانات', href: '#exams' },
    { name: 'دروس اونلاين', href: '#lesson' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const examSchedule = [
    { level: 'Beginner (A1)', date: 'March 25, 2026', time: '10:00 AM' },
    { level: 'Intermediate (B2)', date: 'April 02, 2026', time: '02:00 PM' },
    { level: 'Advanced (C1)', date: 'April 15, 2026', time: '09:00 AM' },
    { level: 'IELTS Preparation', date: 'May 10, 2026', time: '11:00 AM' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-turquoise-200">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-turquoise-500 text-white shadow-lg shadow-blue-200">
              <MessageSquare size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-900">Talk Master</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#lesson"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
            >
              احجز درس
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-slate-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-blue-50 bg-white md:hidden"
            >
              <div className="space-y-1 px-4 pb-6 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50/50 to-transparent blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                Master the Art of Conversation
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Master the Art of <span className="bg-gradient-to-r from-blue-600 to-turquoise-500 bg-clip-text text-transparent">Talk</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl" dir="rtl">
                التدريب اللغوي بقيادة خبراء، ومجتمع عالمي من المتعلمين.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#lesson"
                  className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300 sm:w-auto"
                >
                  طلب درس مباشر
                </a>
                <a
                  href="#ebook"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:bg-slate-50 sm:w-auto"
                >
                  <Download size={20} />
                  تحميل
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" dir="rtl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-3xl bg-blue-100">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="Students learning"
                  className="h-full w-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 h-32 w-32 rounded-2xl bg-turquoise-400 p-4 text-white shadow-xl">
                <Info size={32} className="mb-2" />
                <p className="text-sm font-bold">10+ سنوات خبرة</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">ماذا نقدم</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                نظرًا لإغلاق المدارس في أربيل واعتماد التعليم أونلاين في هذه الفترة، تتوفر دروس تقوية ومتابعة فردية للطلاب لمساعدتهم على فهم الدروس ومواكبة المنهاج.
                <br /><br />
                تدريس المناهج المدرسية ومنهاج بغداد للطلاب من الصف الثالث إلى الصف التاسع,
                ومتابعة فردية لكل طالب لضمان أفضل فهم للمادة
                حصة خاصة (طالب واحد فقط) لزيادة التركيز
                متابعة الدروس والواجبات التي تُعطى أونلاين من المدرسة
                وتدريس اللغة الإنجليزية لجميع الفئات.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'تدريس منهاج Linguaphone البريطاني الكامل',
                  'تقوية القواعد',
                  'القراءة والكتابة',
                  'تدريب على المحادثة'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-turquoise-100 text-turquoise-600">
                      <ChevronLeft size={16} />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-Book Section */}
      <section id="ebook" className="py-20 bg-blue-900 text-white overflow-hidden relative" dir="rtl">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-96 w-96 rounded-full bg-turquoise-500/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <h2 className="text-3xl font-bold sm:text-4xl">تحميل</h2>
              <p className="mt-6 text-lg text-blue-100">
                تحميل دروس, اختبارات, ملفات صوتية, ملفات الدروس السماعية, و غيرها.
              </p>
              <div className="mt-10 flex flex-row flex-wrap gap-4">
                <button className="group flex items-center gap-3 rounded-2xl bg-turquoise-400 px-8 py-4 text-lg font-bold text-blue-950 transition-all hover:bg-turquoise-300 active:scale-95 w-[15rem]">
                  <Download size={24} />
                  تحميل دروس
                </button>
                <button className="group flex items-center gap-3 rounded-2xl bg-turquoise-400 px-8 py-4 text-lg font-bold text-blue-950 transition-all hover:bg-turquoise-300 active:scale-95 w-[15rem]">
                  <Download size={24} />
                  تحميل اختبارات
                </button>
                <button className="group flex items-center gap-3 rounded-2xl bg-turquoise-400 px-8 py-4 text-lg font-bold text-blue-950 transition-all hover:bg-turquoise-300 active:scale-95 w-[15rem]">
                  <Download size={24} />
                  ملفات صوتية
                </button>
                <button className="group flex items-center gap-3 rounded-2xl bg-turquoise-400 px-8 py-4 text-lg font-bold text-blue-950 transition-all hover:bg-turquoise-300 active:scale-95 w-[15rem]">
                  <Download size={24} />
                  تحميل عينة
                </button>
                {/* <p className="mt-4 text-sm text-blue-300 italic">No credit card required. Instant access.</p> */}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <motion.div
                whileHover={{ rotate: -5, scale: 1.05 }}
                className="relative h-[400px] w-[300px] rounded-r-xl bg-gradient-to-br from-blue-600 to-turquoise-500 p-8 shadow-2xl shadow-black/50"
              >
                <div className="absolute left-0 top-0 h-full w-4 bg-black/20" />
                <BookOpen size={48} className="mb-6 opacity-50" />
                <h3 className="text-2xl font-bold leading-tight">Talk Master Rules</h3>
                <p className="mt-4 text-sm font-medium opacity-80">By Talk Master Academy</p>
                {/* <div className="absolute bottom-8 right-8 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <span className="text-xs font-bold">FREE</span>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Schedule Section */}
      <section id="exams" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">مواعيد الدروس</h2>
            {/* <p className="mt-4 text-slate-600">Plan your progress and get certified.</p> */}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {examSchedule.map((exam, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Calendar size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{exam.level}</h3>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-slate-500">Date: <span className="font-semibold text-slate-700">{exam.date}</span></p>
                  <p className="text-sm text-slate-500">Time: <span className="font-semibold text-slate-700">{exam.time}</span></p>
                </div>
              </motion.div>
            ))
            }
          </div>
          <div className="text-center">
            {
              <button className="mt-10 w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300 sm:w-auto">
                سجل الآن
              </button>
            }
          </div>
        </div>
      </section>

      {/* Live Lesson Section */}
      <section id="lesson" className="py-20 bg-white" dir="rtl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-turquoise-600 p-8 text-white shadow-2xl lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">اطلب درس عبر الانترنت</h2>
                <p className="mt-6 text-lg text-blue-50">
                  أكاديميتنا الإلكترونية موثوق بها من قبل العديد من الطلاب في جميع أنحاء العراق نظرًا لدوراتها عالية الجودة، والمدربين ذوي الخبرة، والدروس التفاعلية، والدعم الموثوق. نحن نساعد المتعلمين على تحقيق أهدافهم بكفاءة مع توفير بيئة تعليمية آمنة، جذابة ومرنة.
                </p>
                {/* <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/150?u=${i}`}
                        alt="User"
                        className="h-10 w-10 rounded-full border-2 border-blue-500 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium">Joined by 500+ students this week</p>
                </div> */}
              </div>
              <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl sm:p-8">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-1">
                    <div>
                      <label className="text-m font-bold uppercase tracking-wider text-slate-500">احجز درس اللغة الإنجليزية اليوم وطور مهارات التحدث والاستماع والقراءة والكتابة بكفاءة.</label>
                      <br /><br /><br />
                      {/* <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="john@example.com" /> */}
                    </div>
                    {/* <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                      <input type="text" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="John Doe" />
                    </div> */}
                  </div>
                  {/* <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Language Level</label>
                    <select className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Preferred Time</label>
                    <input type="datetime-local" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                  </div> */}
                  <button className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 active:scale-[0.98]">
                    احجز درس
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payments Section */}
      <section id="payments" className="py-24 bg-slate-50 relative overflow-hidden" dir="rtl">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                طرق <span className="text-blue-600">الدفع</span>
              </h2>
            </motion.div>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:border-blue-200"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <CreditCard size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">دفع نقدي</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">FastPay</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  الطريقة المفضلة لدفع الدروس الفردية أو التبرع مباشرة. سريع، آمن.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-slate-50 p-5 border border-slate-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="min-w-0 w-full sm:w-auto">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">رقم</p>
                    <p className="text-sm sm:text-base font-mono font-bold text-blue-700 truncate" dir="ltr">+964 7704422279</p>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText('+9647704422279')}
                    className="w-full sm:w-auto shrink-0 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm border border-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95"
                  >
                    نسخ
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:border-turquoise-200"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise-50 text-turquoise-600 group-hover:bg-turquoise-600 group-hover:text-white transition-colors duration-300">
                    <Wallet size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">دفع محفظة</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Crypto</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  ندعم بيتكوين. مثالي للطلاب الدوليين الذين يبحثون عن خيارات معاملات برسوم منخفضة.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-slate-50 p-5 border border-slate-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="min-w-0 w-full sm:w-auto">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">BTC</p>
                    <p className="text-xs sm:text-sm font-mono font-bold text-turquoise-700 break-all sm:truncate">1D2axvJaHZ49Y6Lxo4DaCmakmcMyvsjpPk</p>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText('1D2axvJaHZ49Y6Lxo4DaCmakmcMyvsjpPk')}
                    className="w-full sm:w-auto shrink-0 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm border border-slate-100 hover:bg-turquoise-600 hover:text-white hover:border-turquoise-600 transition-all active:scale-95"
                  >
                    نسخ
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 flex items-center justify-center gap-2" dir="rtl">
              <Info size={14} />
              جميع المعاملات مشفرة وتتم معالجتها عبر قنوات آمنة.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white" dir="rtl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-1">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">اتصل بنا</h2>
              {/* <p className="mt-6 text-lg text-slate-600">
                Have questions about our curriculum or pricing? Our support team is available 24/7 to help you.
              </p> */}
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">بريد الكتروني</p>
                    <p className="text-lg font-bold text-slate-900">gullamalfred13@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-turquoise-50 text-turquoise-600">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">جوال</p>
                    <p className="text-lg font-bold text-slate-900" dir="ltr">+964 7704422279</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                {[Instagram].map((Icon, idx) => (
                  <a key={idx} target="_blank" href="https://www.instagram.com/talkmaster2026?igsh=NXI3bjB6aHB5ZXl6" className="flex h-12 w-50 items-center justify-center rounded-2xl bg-slate-300 text-slate-600 transition-all hover:bg-blue-600 hover:text-white">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            {/* <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Subject</label>
                  <input type="text" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Tell us more..."></textarea>
                </div>
                <button className="w-full rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800">
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <MessageSquare size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight">Talk Master</span>
            </div>
            <p className="text-sm text-slate-400" dir="rtl">
              © 2026 جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/talkmaster2026?igsh=NXI3bjB6aHB5ZXl6" className="text-sm text-slate-400 hover:text-white">حقوق الملكية</a>
              {/* <a href="#" className="text-sm text-slate-400 hover:text-white">Terms of Service</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
