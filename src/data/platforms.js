export const platforms = [
  {
    id: 'lichess',
    name: 'Lichess',
    logo: '♟',
    color: '#ffffff',
    bgColor: 'bg-white',
    description: 'Free and open-source chess server',
    url: 'https://lichess.org',
    features: {
      games: {
        label: 'Game Formats',
        unlimited: true,
        details: 'Unlimited daily, blitz, bullet, rapid, classical games'
      },
      puzzles: {
        label: 'Puzzles',
        unlimited: true,
        details: 'Unlimited puzzles and puzzle rush'
      },
      analysis: {
        label: 'Analysis Board',
        unlimited: true,
        details: ' Unlimited engine analysis with 20+ levels'
      },
      lessons: {
        label: 'Lessons',
        limited: true,
        details: 'Learn from 500+ custom puzzles, no video lessons'
      },
      tournaments: {
        label: 'Tournaments',
        unlimited: true,
        details: 'Unlimited arenas and Swiss tournaments'
      },
      broadcast: {
        label: 'Broadcast',
        unlimited: true,
        details: 'Create and watch tournament broadcasts'
      },
      teams: {
        label: 'Teams',
        unlimited: true,
        details: 'Create and join unlimited teams'
      },
      correspondence: {
        label: 'Correspondence',
        unlimited: true,
        details: 'Unlimited correspondence games'
      },
      engine: {
        label: 'Stockfish Engine',
        unlimited: true,
        details: 'Free access to advanced Stockfish engine'
      },
      analysisGames: {
        label: 'Game Analysis',
        unlimited: true,
        details: 'Full game analysis with cloud evaluation'
      }
    },
    tier: 'Free',
    badge: 'Fully Free',
    badgeColor: 'bg-green-500'
  },
  {
    id: 'chess-com',
    name: 'Chess.com',
    logo: '♚',
    color: '#ffffff',
    bgColor: 'bg-green-700',
    description: 'Most popular chess platform worldwide',
    url: 'https://www.chess.com',
    features: {
      games: {
        label: 'Game Formats',
        limited: true,
        details: 'Unlimited free, but some modes require membership'
      },
      puzzles: {
        label: 'Puzzles',
        limited: true,
        details: '300 puzzles/month free, unlimited with membership'
      },
      analysis: {
        label: 'Analysis Board',
        limited: true,
        details: 'Basic analysis free, deep analysis with membership'
      },
      lessons: {
        label: 'Lessons',
        limited: true,
        details: 'Video lessons and interactive tutorials'
      },
      tournaments: {
        label: 'Tournaments',
        unlimited: true,
        details: 'Many free tournaments, more with membership'
      },
      broadcast: {
        label: 'Broadcast',
        limited: true,
        details: 'Watch broadcasts, create with membership'
      },
      teams: {
        label: 'Teams',
        unlimited: true,
        details: 'Join up to 10 clubs'
      },
      correspondence: {
        label: 'Correspondence',
        unlimited: true,
        details: 'Unlimited correspondence games'
      },
      engine: {
        label: 'Analysis Engine',
        limited: true,
        details: 'Basic engine access, advanced with membership'
      },
      analysisGames: {
        label: 'Game Analysis',
        limited: true,
        details: '3 full game analyses/month free'
      }
    },
    tier: 'Freemium',
    badge: 'Freemium',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 'chesskid',
    name: 'ChessKid',
    logo: '♝',
    color: '#ffffff',
    bgColor: 'bg-purple-600',
    description: 'Safe chess learning for kids',
    url: 'https://www.chesskid.com',
    features: {
      games: {
        label: 'Game Formats',
        limited: true,
        details: 'Limited game types, focus on learning'
      },
      puzzles: {
        label: 'Puzzles',
        unlimited: true,
        details: 'Unlimited puzzles with kid-friendly interface'
      },
      analysis: {
        label: 'Analysis Board',
        limited: true,
        details: 'Simple analysis for learning'
      },
      lessons: {
        label: 'Lessons',
        unlimited: true,
        details: 'Extensive video lessons and courses'
      },
      tournaments: {
        label: 'Tournaments',
        limited: true,
        details: 'Kid-safe tournaments and competitions'
      },
      broadcast: {
        label: 'Broadcast',
        limited: false,
        details: 'Limited viewing only'
      },
      teams: {
        label: 'Teams',
        limited: true,
        details: 'School and club groups'
      },
      correspondence: {
        label: 'Correspondence',
        unlimited: true,
        details: 'Unlimited correspondence games'
      },
      engine: {
        label: 'Analysis Engine',
        limited: true,
        details: 'Basic hints and guidance'
      },
      analysisGames: {
        label: 'Game Analysis',
        limited: true,
        details: 'Basic analysis for learning'
      }
    },
    tier: 'Kids',
    badge: 'For Kids',
    badgeColor: 'bg-purple-500'
  },
  {
    id: 'chess24',
    name: 'Chess24',
    logo: '♞',
    color: '#ffffff',
    bgColor: 'bg-orange-600',
    description: 'Premium chess platform with world-class content',
    url: 'https://chess24.com',
    features: {
      games: {
        label: 'Game Formats',
        limited: true,
        details: 'Unlimited free, premium for all modes'
      },
      puzzles: {
        label: 'Puzzles',
        limited: true,
        details: 'Limited puzzles, more with membership'
      },
      analysis: {
        label: 'Analysis Board',
        limited: true,
        details: 'Basic analysis, full with membership'
      },
      lessons: {
        label: 'Lessons',
        unlimited: true,
        details: 'World-class video content from top players'
      },
      tournaments: {
        label: 'Tournaments',
        limited: true,
        details: 'Free and premium tournaments'
      },
      broadcast: {
        label: 'Broadcast',
        unlimited: true,
        details: 'Live coverage of major events'
      },
      teams: {
        label: 'Teams',
        limited: true,
        details: 'Limited clubs'
      },
      correspondence: {
        label: 'Correspondence',
        unlimited: true,
        details: 'Unlimited correspondence games'
      },
      engine: {
        label: 'Analysis Engine',
        limited: true,
        details: 'Basic engine, full with membership'
      },
      analysisGames: {
        label: 'Game Analysis',
        limited: true,
        details: 'Limited analyses, unlimited with membership'
      }
    },
    tier: 'Premium',
    badge: 'Premium',
    badgeColor: 'bg-orange-500'
  }
];

export const featureCategories = [
  { id: 'games', label: 'Game Formats' },
  { id: 'puzzles', label: 'Puzzles' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'lessons', label: 'Lessons' },
  { id: 'tournaments', label: 'Tournaments' },
  { id: 'correspondence', label: 'Correspondence' },
];
