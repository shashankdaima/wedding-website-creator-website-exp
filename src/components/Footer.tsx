interface FooterProps {
  message: string;
  hashtag: string;
}

export default function Footer({ message, hashtag }: FooterProps) {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">{message}</p>
        <p className="text-gray-400">{hashtag}</p>
      </div>
    </footer>
  );
}
