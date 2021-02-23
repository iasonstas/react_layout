import PostForm from 'components/post-form/PostForm';
import Percentages from 'components/percentages/Percentages';
import './SectionTwo.scss';

export default function SectionTwo({ sectionTwo }) {
  const { formText, formLabels, buttonText } = sectionTwo;
  return (
    sectionTwo && (
      <section id="section-two">
        <div className="section-percentages">
          <Percentages sectionTwo={sectionTwo} />
        </div>
        <div className="section-form">
          <h2 className="text-center mt-2">{formText}</h2>
          <div className="text-center text-muted mb-1 mt-2">
            We work with ecosystem leaders, coorporations and startups worldwide.
            <br /> How can we help you?
          </div>
          <PostForm labels={{ buttonText, formLabels }} />
        </div>
      </section>
    )
  );
}
