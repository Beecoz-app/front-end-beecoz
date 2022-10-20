import { useEffect, useState } from "react"
import { Text } from "react-native"
import { IJobs } from "../../../interfaces/Job/IJobs"
import { IServiceType } from "../../../interfaces/Service/IServiceType"
import { api } from "../../../services/api"
import { AppJobsCard } from "./JobsCard"
import { Flat } from "./styles"


export const AppJobsList = () => {
    const [jobs, setJobs] = useState<IServiceType[]>([]);  

    useEffect(() => {
      const fetch = async () => {
        const {data} = await api.get<{serviceType: Array<{id: number, name: string}>}>('/service_type/read')

        console.log(data.serviceType)

        const jobsAdapter: Array<IServiceType> = data.serviceType.map(serviceType => {
          return {
            id: serviceType.id,
            service: serviceType.name
          }
        })

        setJobs(jobsAdapter)
      }

      fetch()
    }, [])

    return (
      <>
        <Flat
          data={jobs}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <AppJobsCard service={item}/>
            )}
            />
        </>
    )
}