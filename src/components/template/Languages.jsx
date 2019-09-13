import React from "react";
import { TagCloud } from "react-tagcloud";
import './Languages.css'

const data = [
  { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
  { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 }, { value: "Unit Tests", count: 15 },
  { value: "MySQL", count: 17 }, { value: "Git", count: 27 },
  { value: "PHP", count: 30 }, { value: "Gulp", count: 15 },
  { value: "Bootstrap", count: 30 }, { value: "REST", count: 11 },
];

const customRenderer = (tag, size, color) => (
  <span key={tag.value}
        style={{
          animation: 'blinker 3s linear infinite',
          animationDelay: `${Math.random() * 2}s`,
          fontSize: `${size}em`,
          border: `2px solid ${color}`,
          margin: '3px',
          padding: '3px',
          display: 'inline-block',
          color: 'white',
        }}>{tag.value}</span>
);

export default () => 
        <div id="languages">
            <span className="special-character">{'{'}</span>
            <TagCloud tags={data}
                minSize={1}
                maxSize={2}
                renderer={customRenderer} />
            <span className="special-character">{'}'}</span>
        </div>