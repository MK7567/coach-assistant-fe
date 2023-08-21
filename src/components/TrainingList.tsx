import './Training.css';
import {useEffect, useState} from "react";
import axios from "axios";
import training from "./Training.tsx";
import Training from "./Training.tsx";

const TrainingList = () => {
    const [trainings, setTrainings] = useState([]);

    const loadTrainings = async () => {
        const res = await axios.get('http://localhost:3000/training')
        setTrainings(res.data)
    }

    useEffect(() => {loadTrainings(), []})

    return (
        <>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Trainings</h6>

                <div>
                    {
                        trainings.map((training:any, i) => {
                            return <Training trainingData={training} key={i} />
                        })
                    }
                </div>

                <div className="d-flex text-body-secondary pt-3">

                    <p className="pb-3 mb-0 small lh-sm border-bottom">

                        <strong className="d-block text-gray-dark">@username</strong>
                        Some representative placeholder content, with some information about this user. Imagine this
                        being some sort of status update, perhaps?
                    </p>
                </div>
            </div>
        </>
    )
}

export default TrainingList;