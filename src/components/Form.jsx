import { useState } from "react"

const initialReviewData = {
  bestFeatures: {
    colour: false,
    sound: false,
    logo: false,
    size: false,
  },
  worstFeatures: {
    colour: false,
    sound: false,
    logo: false,
    size: false,
  },
  rateConsistency: "",
  rateColour: "",
  rateLogo: "",
  spendTime: {
    swimming: false,
    bathing: false,
    chatting: false,
    none: false,
  },
  review: "",
  username: "",
  email: "",
}
function Form({ addReview }) {
  const [reviewData, setReviewData] = useState(initialReviewData)

  function handleSubmit(event) {
    event.preventDefault()
    addReview(reviewData)
    setReviewData(initialReviewData)
  }

  function handleChange(event) {
    console.log("event", event)
    console.log(reviewData)
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    })
  }

  function handleChangeChecked(event) {
    //  console.log("event", event)

    const newObject = {
      ...reviewData[event.target.name],
      [event.target.value]: !reviewData[event.target.name][event.target.value],
    }
    console.log(reviewData[event.target.name][event.target.value])
    console.log(newObject)
    setReviewData({ ...reviewData, [event.target.name]: newObject })

    //  setReviewData({
    //    ...reviewData,
    //    [event.target.name]: {...event.target.name}, event.target.checked,
    //  })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        {/* <BestFeaturesCheckboxes/> */}
        <ul>
          <li>
            <label>
              <input
                name="bestFeatures"
                type="checkbox"
                value="colour"
                checked={reviewData.bestFeatures.colour}
                onChange={handleChangeChecked}
              />
              It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input
                name="bestFeatures"
                type="checkbox"
                value="sound"
                checked={reviewData.bestFeatures.sound}
                onChange={handleChangeChecked}
              />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input
                name="bestFeatures"
                type="checkbox"
                value="logo"
                checked={reviewData.bestFeatures.logo}
                onChange={handleChangeChecked}
              />
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input
                name="bestFeatures"
                type="checkbox"
                value="size"
                checked={reviewData.bestFeatures.size}
                onChange={handleChangeChecked}
              />
              Its big!
            </label>
          </li>
        </ul>
      </label>
      <label className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        {/* <WorstFeaturesCheckboxes/> */}
        <ul>
          <li>
            <label>
              <input
                name="worstFeatures"
                type="checkbox"
                value="colour"
                checked={reviewData.worstFeatures.colour}
                onChange={handleChangeChecked}
              />
              It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input
                name="worstFeatures"
                type="checkbox"
                value="sound"
                checked={reviewData.worstFeatures.sound}
                onChange={handleChangeChecked}
              />
              It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input
                name="worstFeatures"
                type="checkbox"
                value="logo"
                checked={reviewData.worstFeatures.logo}
                onChange={handleChangeChecked}
              />
              It has a logo!
            </label>
          </li>
          <li>
            <label>
              <input
                name="worstFeatures"
                type="checkbox"
                value="size"
                checked={reviewData.worstFeatures.size}
                onChange={handleChangeChecked}
              />
              Its big!
            </label>
          </li>
        </ul>
      </label>
      <label className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        {/* <ConsistencyRadioButtons/> */}
        <ul>
          <li>
            <input
              id="rateConsistency1"
              type="radio"
              name="rateConsistency"
              value="1"
              onChange={handleChange}
            />
            <label for="rateConsistency1">1</label>
          </li>
          <li>
            <input
              id="rateConsistency2"
              type="radio"
              name="rateConsistency"
              value="2"
              onChange={handleChange}
            />
            <label for="rateConsistency2">2</label>
          </li>
          <li>
            <input
              id="rateConsistency3"
              type="radio"
              name="rateConsistency"
              value="3"
              onChange={handleChange}
            />
            <label for="rateConsistency3">3</label>
          </li>
          <li>
            <input
              id="rateConsistency4"
              type="radio"
              name="rateConsistency"
              value="4"
              onChange={handleChange}
            />
            <label for="rateConsistency4">4</label>
          </li>
        </ul>
      </label>
      <label className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/* <RateColourRadioButtons/> */}
        <ul>
          <li>
            <input
              id="rateColour1"
              type="radio"
              name="rateColour"
              value="1"
              onChange={handleChange}
            />
            <label for="rateColour1">1</label>
          </li>
          <li>
            <input
              id="rateColour2"
              type="radio"
              name="rateColour"
              value="2"
              onChange={handleChange}
            />
            <label for="rateColour2">2</label>
          </li>
          <li>
            <input
              id="rateColour3"
              type="radio"
              name="rateColour"
              value="3"
              onChange={handleChange}
            />
            <label for="rateColour3">3</label>
          </li>
          <li>
            <input
              id="rateColour4"
              type="radio"
              name="rateColour"
              value="4"
              onChange={handleChange}
            />
            <label for="rateColour4">4</label>
          </li>
        </ul>
      </label>
      <label className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        {/* <RateLogoRadioButtons/> */}
        <ul>
          <li>
            <input
              id="rateLogo1"
              type="radio"
              name="rateLogo"
              value="1"
              onChange={handleChange}
            />
            <label for="rateLogo1">1</label>
          </li>
          <li>
            <input
              id="rateLogo2"
              type="radio"
              name="rateLogo"
              value="2"
              onChange={handleChange}
            />
            <label for="rateLogo2">2</label>
          </li>
          <li>
            <input
              id="rateLogo3"
              type="radio"
              name="rateLogo"
              value="3"
              onChange={handleChange}
            />
            <label for="rateLogo3">3</label>
          </li>
          <li>
            <input
              id="rateLogo4"
              type="radio"
              name="rateLogo"
              value="4"
              onChange={handleChange}
            />
            <label for="rateLogo4">4</label>
          </li>
        </ul>
      </label>
      <label className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/* <TimeSpentCheckboxes/> */}
        <ul>
          <li>
            <label>
              <input
                name="spendTime"
                type="checkbox"
                value="swimming"
                checked={reviewData.spendTime.swimming}
                onChange={handleChangeChecked}
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                name="spendTime"
                type="checkbox"
                value="bathing"
                checked={reviewData.spendTime.bathing}
                onChange={handleChangeChecked}
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                name="spendTime"
                type="checkbox"
                value="chatting"
                checked={reviewData.spendTime.chatting}
                onChange={handleChangeChecked}
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                name="spendTime"
                type="checkbox"
                value="none"
                checked={reviewData.spendTime.none}
                onChange={handleChangeChecked}
              />
              I don't like spending time with it
            </label>
          </li>
        </ul>
      </label>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={reviewData.review}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={reviewData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={reviewData.email}
          onChange={handleChange}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  )
}
export default Form
