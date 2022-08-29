import { IJobs } from "../../../interfaces/Job/IJobs"
import { IServiceType } from "../../../interfaces/Service/IServiceType"
import { AppJobsCard } from "./JobsCard"
import { Flat } from "./styles"


export const AppJobsList = () => {
    const data: IServiceType[] = [
        {id: 1, service: 'Marcenaria'},
    ]
    return (
        <Flat
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <AppJobsCard service={item}/>
          )}
        />
    )
}