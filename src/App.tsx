import StatelessComponent from './components/StatelessComponent';
import StatefulComponent from './components/StatefulComponent'

function App() {
  return (
    <div>
      <StatelessComponent
        quote = "Birds teach us something every day — to rise above, to travel light, and to sing no matter the weather."
        author = "Unknown"
      />

      <StatefulComponent
        title = "Montezuma Oropendola"
        author = "Jake Jacoby"
        date = "July 2025"
        summary = "In January 2020, I had the opportunity to travel to Costa Rica in Central America. I departed from Tampa, changed planes in Miami and then arrived in San Jose, the capital of Costa Rica. The Costa Rica Colon is the country's currency and was named after Christopher Columbus."
        description = "Costa Rica is one of the most biodiverse countries in the world and contains about 5-percent of the world's species. Unlike many other countries, Costa Rica enjoys a stable and friendly political climate suitable for all types of tourism, especially birding and photography. It is also one of the few countries in the world with no Army as its military was successfully abolished in 1948."
        imageUrl = "montezuma-oropendola-tn.jpg"
      />
    </div>
  );
}

export default App;
