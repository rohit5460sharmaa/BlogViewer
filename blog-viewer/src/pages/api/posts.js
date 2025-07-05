export default function handler(req, res) {
  const posts = [
    {
      id: '1',
      title: 'Mastering JavaScript Closures',
      content: 'Closures allow functions to retain access to their lexical scope, enabling powerful patterns like function factories and private variables.',
    },
    {
      id: '2',
      title: 'REST vs GraphQL: Which to Choose?',
      content: 'REST provides fixed endpoints while GraphQL allows clients to request exactly the data they need — ideal for complex frontends.',
    },
    {
      id: '3',
      title: 'Getting Started with Docker',
      content: 'Docker containers let you bundle applications and dependencies for consistent deployments across all environments.',
    },
    {
      id: '4',
      title: 'CSS Grid vs Flexbox',
      content: 'Flexbox is best for one-dimensional layouts; Grid excels in two-dimensional layouts. Both are powerful when used appropriately.',
    },
    {
      id: '5',
      title: 'Top Git Commands for Developers',
      content: 'Essential Git commands include commit, push, pull, merge, rebase, stash, and cherry-pick — each plays a key role in collaboration.',
    },
    {
      id: '6',
      title: 'Understanding OAuth 2.0',
      content: 'OAuth 2.0 is an authorization framework allowing third-party apps to access user data securely without exposing credentials.',
    },
    {
      id: '7',
      title: 'Build a To-Do App with React',
      content: 'Creating a basic to-do app teaches React fundamentals like state, props, event handling, and localStorage.',
    },
    {
      id: '8',
      title: 'Demystifying Event Loop in JavaScript',
      content: 'JavaScript’s event loop enables asynchronous behavior by managing the call stack and task queue efficiently.',
    },
    {
      id: '9',
      title: 'How HTTPS Works',
      content: 'HTTPS encrypts HTTP traffic using TLS, ensuring secure communication between browser and server.',
    },
    {
      id: '10',
      title: 'Intro to WebSockets',
      content: 'WebSockets provide full-duplex communication channels over a single TCP connection — ideal for real-time apps.',
    },
    {
      id: '11',
      title: 'Deploying Projects on Vercel',
      content: 'Vercel allows developers to deploy frontend projects quickly with CI/CD, preview URLs, and global CDN support.',
    },
    {
      id: '12',
      title: 'SQL vs NoSQL: Key Differences',
      content: 'SQL databases are relational with structured schemas, while NoSQL databases offer flexibility and horizontal scaling.',
    },
    {
      id: '13',
      title: 'Understanding JWT Authentication',
      content: 'JWTs are compact tokens used to securely transmit information, often for user authentication and API authorization.',
    },
    {
      id: '14',
      title: 'Beginner’s Guide to CI/CD',
      content: 'CI/CD automates testing and deployment, reducing manual errors and ensuring faster, reliable delivery pipelines.',
    },
    {
      id: '15',
      title: 'Ace Your Technical Interview',
      content: 'Master DSA, system design, and behavioral questions. Practice mock interviews and focus on problem-solving strategies.',
    }
  ];

  res.status(200).json(posts);
}
