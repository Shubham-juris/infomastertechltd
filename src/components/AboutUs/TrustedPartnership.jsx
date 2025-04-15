import React from 'react';
import {
  Globe,
  Signal,
  Waves,
  BarChart3,
} from 'lucide-react';

const logoIcons = [
  { Icon: Globe, label: 'Global Partner' },
  { Icon: Signal, label: 'Signal Partner' },
  { Icon: Waves, label: 'Wave Partner' },
  { Icon: BarChart3, label: 'Chart Partner' },
];

export default function TrustedPartnership() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-fuchsia-600 py-12">
      <h2 className="text-white text-3xl font-semibold text-center mb-10">
        Trusted Partnership
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-14 px-6">
        {logoIcons.map(({ Icon, label }, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <Icon className="h-12 w-12" />
            <span className="mt-2 text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
