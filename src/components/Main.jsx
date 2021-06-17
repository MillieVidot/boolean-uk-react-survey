import { useState } from "react"
import Form from "./Form"

import AnswersList from "./AnswersList"

export default function Main() {
  const [open, setOpen] = useState(false) //Ignore this state

  const [reviews, setReviews] = useState([])

  function addReview(review) {
    setReviews([...reviews, review])
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <AnswersList/> */}
      </section>
      <section className="main__form">
        <Form addReview={addReview} />
      </section>
    </main>
  )
}
