import React, { useState } from "react";
import Feature from "./Feature";



const FeatureJob = ({ featureJob }) => {

const [isAllJob, setAllJob] = useState(false)

const allJobsToSee = () => {
  setAllJob(x => !x)
}
const jobsToShow = isAllJob? featureJob.length : 4

  return (
    <div>
      <p className="text-center text-4xl mt-20 font-sans font-bold pb-7 mx-24">
        Featured Jobs
      </p>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <section className="grid lg:grid-cols-2 lg:mx-48 my-5">
        {featureJob
          ?.filter((item, idx) => idx < jobsToShow)
          .map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        <div className="button pt-3 ms-10 lg:ms-96 w-40 my-5">
          <button onClick={allJobsToSee}> {isAllJob? 'Show less Job' : 'Show More Job'}</button>
        </div>
      </section>
    </div>
  );
};

export default FeatureJob;

