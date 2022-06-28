import db from '../utils/firebase'
import { doc, setDoc } from 'firebase/firestore'

export const submitContactForm = async (props, setIsSubmitted) => {
    alert('Add document')
    setIsSubmitted(true)
}   