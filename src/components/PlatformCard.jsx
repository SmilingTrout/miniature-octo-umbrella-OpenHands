import React from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const LimitedIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LimitedFalseIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function PlatformCard({ platform }) {
  const featureIcons = {
    unlimited: <CheckIcon />,
    limited: <LimitedIcon />,
    false: <LimitedFalseIcon />,
  };

  const getStatusIcon = (value) => {
    if (value === true) return featureIcons.unlimited;
    if (value === false) return featureIcons.false;
    return featureIcons.limited;
  };

  const getStatusLabel = (value) => {
    if (value === true) return 'text-green-400';
    if (value === false) return 'text-gray-400';
    return 'text-yellow-400';
  };

  return (
    <div className="bg-chess-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className={`${platform.bgColor} p-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-5xl" style={{ color: platform.color }}>{platform.logo}</div>
            <div>
              <h3 className="text-2xl font-bold" style={{ color: platform.color }}>{platform.name}</h3>
              <span className={`inline-block ${platform.badgeColor} text-white text-xs px-2 py-1 rounded-full mt-1`}>
                {platform.badge}
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm mt-3 opacity-80" style={{ color: platform.color }}>{platform.description}</p>
      </div>

      {/* Features */}
      <div className="p-6">
        <div className="space-y-4">
          {Object.entries(platform.features).map(([key, feature]) => (
            <div key={key} className="border-b border-gray-700 pb-3 last:border-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-chess-text">{feature.label}</h4>
                  <p className="text-sm text-gray-400 mt-1">{feature.details}</p>
                </div>
                <div className={`ml-4 mt-1 ${getStatusLabel(feature.unlimited)}`}>
                  {getStatusIcon(feature.unlimited)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Button */}
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full bg-chess-accent text-white text-center py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Visit {platform.name}
        </a>
      </div>
    </div>
  );
}
