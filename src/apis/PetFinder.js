import axios from 'axios'
import { petFinderBase } from '../constants/urls'

export const PetFinderApi = axios.create({
        baseURL: petFinderBase,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJockNXVENDdDR5VXA3UElHaTVheU50dUx0eDVlZ2ZRV0ZLNk9RM2luNHdOeXRTRk5YdyIsImp0aSI6IjBjMThiMjI4YWM5NTExNDRjODlmMmMzMWNlZjgzM2Q1Njk3YTFjYzgzYmRkOTc4NWViZDhkYjRkMWVlNmZmNjcxZTI3Nzg3NTBhMmY2MWY0IiwiaWF0IjoxNjEyODI2OTE5LCJuYmYiOjE2MTI4MjY5MTksImV4cCI6MTYxMjgzMDUxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.GH7ablwBt0rPTZXfu3gx34QD1vZSel24cRSALDPARaSzY6MPrYVExjF0QkbKSdV5spRWhk8pvMJitpmjZp9GooVT7MZLcnXP06_gIga12uY5IpJ4HKJ3N1ItKSJCZR8pvMt44RvDVQPul8_0U3GrvhfiBhPzoG60Vme3txwtMl2Z_GJ8yvTRgu_1tMz5icm5SJQxrDdQIbh6M1nnYKqN3iXBqKLWqlalkThmuIL7Mqtwg_tycpvlEarpMoJHqM6DMaE3W-HEjmeVPm-Qlj2ELOTB3NP25XJhEmV0qD-Ki481IsAr8-p3gFNmt-JIm6_0mPjub4QUqKSOMCVCSKzaiA' ,
            'Content-Type': 'application/json'
        }
    })