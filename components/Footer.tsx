
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rootGreen text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-4xl font-serif font-black tracking-tighter mb-8">ROOT<span className="text-rootGold">.</span></h3>
          <p className="text-white/60 max-w-sm leading-relaxed mb-12">
            "문제는 감정이 아니라 기준이다."<br />
            흔들리는 삶을 위한 가장 단단한 설계, ROOT 컨설팅은 당신의 본질적인 구조를 재정립합니다.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-rootGold transition-colors">Instagram</a>
            <a href="#" className="hover:text-rootGold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-rootGold transition-colors">Notion</a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-rootGold transition-colors">Philosophy</Link></li>
              <li><Link to="/programs" className="hover:text-rootGold transition-colors">Programs</Link></li>
              <li><Link to="/booking" className="hover:text-rootGold transition-colors">Apply</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8">Office</h4>
            <address className="not-italic text-sm text-white/60 leading-relaxed">
              Seoul, South Korea<br />
              Gangnam-gu, Teheran-ro<br />
              contact@root-consulting.com
            </address>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
        <span>© 2024 ROOT FOUNDATION CONSULTING.</span>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
