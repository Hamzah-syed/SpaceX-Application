import gqp from "graphql-tag";

export const comapnyInfo = gqp`
query companyInfo {
  info{
   summary
 }
 }`;

export const missionNames = gqp`
  
query missionNames{
  missions{
    mission_name
    mission_id
  }
}
 `;

export const missionDetails = gqp`
  
query missiondetails($id: String!){
  mission(id:$id){
    mission_name
    twitter
    website
    wikipedia
    description
  }
}
 `;
