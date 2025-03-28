export type experience = {
  company: string,
  role: string,
  date: string,
  projects?: projects[]
}

export type projects = {
  name: string,
  description?: string,
  additional_details?: projects[]
}

export type skill = {
  name: string
}

export const xpList:experience[] = [
  {
    company: 'Yondu Inc',
    role: 'Junior Software Engineer',
    date: 'July 2021 - Present',
    projects: [
      {
        name: 'Front-End developer for Glife Miniprograms',
      },
      // {
      //   name: 'Projects worked on:',
      //   additional_details: [
      //     {
      //       name: 'Upstream',
      //       description: 'Gcash video streaming Miniprogram'
      //     },
      //     {
      //       name: 'Bench',
      //       description: ' Ecommerce Gcash miniprogram'
      //     },
      //   ]
      // },
      {
        name: 'Front-End developer for Webtools and Ecommerce websites using Vue.js',
      },
      // {
      //   name: 'Projects worked on:',
      //   additional_details: [
      //     {
      //       name: 'Sim Bulk Registration',
      //       description: 'Sim Registration webtool'
      //     },
      //     {
      //       name: 'Novadeci (Insurance, Election, Loans',
      //       description: 'super app webtool for Novadeci(utilizing micro frontend)'
      //     },
      //     {
      //       name: 'Rex Lcms',
      //       description: 'learning management system for rex education'
      //     },
      //   ]
      // },
      {
        name: 'Level 3 tech support for Front-End side of deployed projects using Vue.js',
      },
      {
        name: 'Projects supported:',
        // additional_details: [
        //   {
        //     name: 'Haku(mcdo Mcdelivery)',
        //     description: 'Gcash video streaming Miniprogram'
        //   },
        //   {
        //     name: 'Rex Estore',
        //     description: 'Ecommerce site for rex education'
        //   },
        //   {
        //     name: 'Rex Lcms',
        //     description: 'learning management system for rex education'
        //   },
        //   {
        //     name: 'UPA FE',
        //     description: 'internal webtool for unilab'
        //   },
        //   {
        //     name: 'Gardenia DMS',
        //     description: 'internal webtool for Gardenia DMS(utilizes on-Prem deployment)'
        //   },
        // ]
      },
    ]
  },
  {
    company: 'Infopipany',
    role: 'Junior Programmer',
    date: 'February 2018 - 2020',
    projects: [
      {
        name: 'Created an Accounting System using C# and Entity Framework.'
      },
      {
        name: 'Developed POS with Inventory System using C# and Sails.js'
      },
      {
        name: 'Developed Issue Tracking system using vue.js and sails.js'
      },
    ]
  },
  {
    company: 'Ignacio Tagle Construction & Development',
    role: 'OJT',
    date: 'MARCH 2016- MAY 2016',
    projects: [
      {
        name: 'Developed a Payroll System to be used by the company using the C# Programming Language.'
      },
    ]
  }
]

export const languages: skill[] = [
  {
    name: 'C#'
  },
  {
    name: 'Javascript'
  },
  {
    name: 'Typescript'
  },
  {
    name: 'HTML'
  },
  {
    name: 'CSSS'
  },
  {
    name: 'SASS'
  },
]
export const frameworks: skill[] = [
  {
    name: 'Vue.JS'
  },
  {
    name: 'Next.JS'
  },
  {
    name: 'Node.JS'
  },
]
export const tools: skill[] = [
  {
    name: 'Git'
  },
  {
    name: 'AWS'
  },
  {
    name: 'Postman'
  },
  {
    name: 'Miniprogram Studio'
  },
  {
    name: 'VSCode'
  },
]
