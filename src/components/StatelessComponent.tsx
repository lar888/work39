interface StatelessComponentProps {
  quote: string;
  author: string;
}

const StatelessComponent = ({ quote, author }: StatelessComponentProps) => {
  return (
    <div className="quote">
      <h3>"{quote}"</h3>
      <p>– {author}</p>
    </div>
  );
};

export default StatelessComponent;
