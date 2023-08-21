const Training = ({trainingData}) => {
  return (
      <>
          <div className="d-flex text-body-secondary pt-3">

              <p className="pb-3 mb-0 small lh-sm border-bottom">
                  {trainingData.content}

              </p>
          </div>
      </>
  )
}

export default Training;