import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      person: {
        professionalHeadline: "Developer",
        completion: 0.9167,
        showPhone: false,
        created: "2020-11-24T15:43:06Z",
        verified: true,
        flags: {
          benefits: false,
          canary: false,
          enlauSource: false,
          fake: false,
          featureDiscovery: true,
          getSignaledBenefitsViewed: false,
          firstSignalSent: false,
          promoteYourselfBenefitsViewed: false,
          promoteYourselfCompleted: false,
          importingLinkedin: true,
          onBoarded: true,
          remoter: true,
          signalsFeatureDiscovery: true,
          signedInToOpportunities: true,
          importingLinkedinRecommendations: true,
          contactsImported: true,
          appContactsImported: false,
          genomeCompletionAcknowledged: true
        },
        weight: 0,
        locale: "en",
        subjectId: 877443,
        picture:
          "https://starrgate.s3.amazonaws.com:443/users/5ca38ee5df429f11ce1c37730cfeea6bed476197/profile_GgwF9TP.jpg",
        hasEmail: true,
        name: "Yaqueline Aide Hoyos Montes",
        links: [
          {
            id: "kNmDLRqy",
            name: "linkedin",
            address:
              "https://www.linkedin.com/in/yaqueline-hoyos-montes-76992a196/"
          },
          {
            id: "JMezKRDj",
            name: "twitter",
            address: "https://twitter.com/Yaque_Hoyos"
          }
        ],
        location: {
          name: "Antioquia, Colombia",
          country: "Colombia",
          latitude: 7.1986064,
          longitude: -75.3412179,
          timezone: "America/Bogota",
          timezoneOffSet: -18000000
        },
        theme: "teal400",
        id: "EM3AELBy",
        pictureThumbnail:
          "https://starrgate.s3.amazonaws.com:443/CACHE/images/users/5ca38ee5df429f11ce1c37730cfeea6bed476197/profile_GgwF9TP/939fb041c5f6c757eb79e5f600970242.jpg",
        claimant: false,
        weightGraph:
          "https://hcti.io/v1/image/e6460f35-633e-49fb-94f3-317e4324461c",
        publicId: "yaqueline150"
      },
      stats: {
        jobs: 1,
        education: 1,
        strengths: 5,
        interests: 3
      },
      strengths: [
        {
          id: "kNmYOPqN",
          code: 55723,
          name: "Web developer",
          weight: 0,
          recommendations: 0,
          media: [],
          created: "2020-11-24T16:27:29"
        },
        {
          id: "JMegVqDy",
          code: 239683,
          name: "Creatividad",
          weight: 0,
          recommendations: 0,
          media: [],
          created: "2020-11-24T16:27:29"
        },
        {
          id: "zNGO83oN",
          code: 40451,
          name: "Customer Service",
          weight: 0,
          recommendations: 0,
          media: [],
          created: "2020-11-24T16:01:42"
        },
        {
          id: "qNPaKX2M",
          code: 521,
          name: "Engineering",
          weight: 0,
          recommendations: 0,
          media: [],
          created: "2020-11-24T16:01:35"
        },
        {
          id: "RyDQJ1vN",
          code: 704,
          name: "Software Development",
          weight: 0,
          recommendations: 0,
          media: [],
          created: "2020-11-24T16:01:09"
        }
      ],
      interests: [
        {
          id: "5yk01AkN",
          code: 20923,
          name: "Design",
          media: [],
          created: "2020-11-24T16:02:03"
        },
        {
          id: "8yZ3npWN",
          code: 18645,
          name: "Marketing",
          media: [],
          created: "2020-11-24T16:02:07"
        },
        {
          id: "EM3PLdBj",
          code: 55795,
          name: "Management",
          media: [],
          created: "2020-11-24T16:02:22"
        }
      ],
      experiences: [
        {
          id: "GNKWXBVN",
          category: "education",
          name: "Ingeniería de sistemas",
          organizations: [
            {
              id: 528616,
              name: "Universidad de Antioquia",
              picture:
                "https://res.cloudinary.com/torre-technologies-co/image/upload/v1602210124/origin/bio/organizations/azpotqa9ssdk7y9fusxu.gif"
            }
          ],
          responsibilities: [],
          fromMonth: "October",
          fromYear: "2015",
          toMonth: "October",
          toYear: "2020",
          highlighted: true,
          weight: 0,
          verifications: 0,
          recommendations: 0,
          media: [],
          rank: 1
        },
        {
          id: "qNPgPbay",
          category: "jobs",
          name: "Frontend developer",
          organizations: [
            {
              id: 448768,
              name: "Guane Enterprises",
              picture:
                "https://res.cloudinary.com/torre-technologies-co/image/upload/v1601995264/origin/bio/organizations/tbczhrxfzgti4zf6lnb9.png"
            }
          ],
          responsibilities: [],
          fromMonth: "October",
          fromYear: "2019",
          highlighted: true,
          weight: 0,
          verifications: 0,
          recommendations: 0,
          media: [],
          rank: 1
        }
      ],
      awards: [],
      jobs: [
        {
          id: "qNPgPbay",
          category: "jobs",
          name: "Frontend developer",
          organizations: [
            {
              id: 448768,
              name: "Guane Enterprises",
              picture:
                "https://res.cloudinary.com/torre-technologies-co/image/upload/v1601995264/origin/bio/organizations/tbczhrxfzgti4zf6lnb9.png"
            }
          ],
          responsibilities: [],
          fromMonth: "October",
          fromYear: "2019",
          highlighted: true,
          weight: 0,
          verifications: 0,
          recommendations: 0,
          media: [],
          rank: 1
        }
      ],
      projects: [],
      publications: [],
      education: [
        {
          id: "GNKWXBVN",
          category: "education",
          name: "Ingeniería de sistemas",
          organizations: [
            {
              id: 528616,
              name: "Universidad de Antioquia",
              picture:
                "https://res.cloudinary.com/torre-technologies-co/image/upload/v1602210124/origin/bio/organizations/azpotqa9ssdk7y9fusxu.gif"
            }
          ],
          responsibilities: [],
          fromMonth: "October",
          fromYear: "2015",
          toMonth: "October",
          toYear: "2020",
          highlighted: true,
          weight: 0,
          verifications: 0,
          recommendations: 0,
          media: [],
          rank: 1
        }
      ],
      opportunities: [
        {
          id: "jp4YZn8j",
          interest: "jobs",
          field: "active",
          data: true
        },
        {
          id: "MvgEvB3j",
          interest: "jobs",
          field: "private",
          data: false
        },
        {
          id: "N8g34xDy",
          interest: "jobs",
          field: "desirable-compensation-currency",
          data: "USD$"
        },
        {
          id: "yzO4XRXN",
          interest: "jobs",
          field: "desirable-compensation-amount",
          data: 30000
        },
        {
          id: "MWr7PLBN",
          interest: "jobs",
          field: "desirable-compensation-periodicity",
          data: "yearly"
        },
        {
          id: "yDOWn58j",
          interest: "jobs",
          field: "desirable-compensation-publicly-visible",
          data: true
        },
        {
          id: "NKgve6rN",
          interest: "gigs",
          field: "active",
          data: false
        },
        {
          id: "M7dZEbDj",
          interest: "internships",
          field: "active",
          data: false
        },
        {
          id: "jw4Yqp4y",
          interest: "mentoring",
          field: "active",
          data: false
        },
        {
          id: "MEXZVbnN",
          interest: "advising",
          field: "active",
          data: false
        },
        {
          id: "M2Eg0K8N",
          interest: "industries",
          field: "types",
          data: [
            {
              code: 33357,
              locale: "en",
              name: "Web Applications"
            },
            {
              code: 33426,
              locale: "en",
              name: "Software Engineering"
            }
          ]
        }
      ],
      languages: [
        {
          code: "en",
          language: "English"
        }
      ],
      personalityTraitsResults: {
        groups: [
          {
            id: "extraversion",
            order: 0,
            median: 3.5,
            stddev: 0.57
          },
          {
            id: "openness-to-experience",
            order: 1,
            median: 3.41,
            stddev: 0.6
          },
          {
            id: "conscientiousness",
            order: 2,
            median: 3.44,
            stddev: 0.56
          },
          {
            id: "agreeableness",
            order: 3,
            median: 2.94,
            stddev: 0.58
          },
          {
            id: "honesty-humility",
            order: 4,
            median: 3.19,
            stddev: 0.62
          },
          {
            id: "emotionality",
            order: 5,
            median: 3.43,
            stddev: 0.62
          }
        ],
        analyses: [
          {
            groupId: "openness-to-experience",
            analysis: 3.88
          },
          {
            groupId: "honesty-humility",
            analysis: 4.13
          },
          {
            groupId: "agreeableness",
            analysis: 3.31
          },
          {
            groupId: "altruism",
            analysis: 4.5
          },
          {
            groupId: "conscientiousness",
            analysis: 4.06
          },
          {
            groupId: "emotionality",
            analysis: 3.44
          },
          {
            groupId: "extraversion",
            analysis: 3.19
          }
        ]
      },
      professionalCultureGenomeResults: {
        groups: [
          {
            id: "1",
            text: "Achievement oriented",
            answer: "all-the-time",
            order: 0
          },
          {
            id: "24",
            text: "Being team oriented",
            answer: "all-the-time",
            order: 1
          },
          {
            id: "2",
            text: "Action oriented",
            answer: "most-of-the-time",
            order: 2
          },
          {
            id: "3",
            text: "Adaptability",
            answer: "most-of-the-time",
            order: 3
          },
          {
            id: "4",
            text: "Avoiding conflict",
            answer: "most-of-the-time",
            order: 4
          },
          {
            id: "6",
            text: "Being analytical",
            answer: "most-of-the-time",
            order: 5
          },
          {
            id: "7",
            text: "Being calm",
            answer: "most-of-the-time",
            order: 6
          },
          {
            id: "8",
            text: "Being careful",
            answer: "most-of-the-time",
            order: 7
          },
          {
            id: "11",
            text: "Being decisive",
            answer: "most-of-the-time",
            order: 8
          },
          {
            id: "12",
            text: "Being easygoing",
            answer: "most-of-the-time",
            order: 9
          },
          {
            id: "13",
            text: "Being fair",
            answer: "most-of-the-time",
            order: 10
          },
          {
            id: "14",
            text: "Being honest",
            answer: "most-of-the-time",
            order: 11
          },
          {
            id: "15",
            text: "Being innovative",
            answer: "most-of-the-time",
            order: 12
          },
          {
            id: "18",
            text: "Being precise",
            answer: "most-of-the-time",
            order: 13
          },
          {
            id: "20",
            text: "Being reflective",
            answer: "most-of-the-time",
            order: 14
          },
          {
            id: "21",
            text: "Being results oriented",
            answer: "most-of-the-time",
            order: 15
          },
          {
            id: "22",
            text: "Being rule oriented",
            answer: "most-of-the-time",
            order: 16
          },
          {
            id: "23",
            text: "Being supportive",
            answer: "most-of-the-time",
            order: 17
          },
          {
            id: "25",
            text: "Being tolerant",
            answer: "most-of-the-time",
            order: 18
          },
          {
            id: "26",
            text: "Being willing to experiment",
            answer: "most-of-the-time",
            order: 19
          },
          {
            id: "28",
            text: "Cooperative",
            answer: "most-of-the-time",
            order: 20
          },
          {
            id: "29",
            text: "Emphasis on professional growth",
            answer: "most-of-the-time",
            order: 21
          },
          {
            id: "30",
            text: "Emphasizing quality",
            answer: "most-of-the-time",
            order: 22
          },
          {
            id: "31",
            text: "Fast moving",
            answer: "most-of-the-time",
            order: 23
          },
          {
            id: "33",
            text: "Having high ethical standards",
            answer: "most-of-the-time",
            order: 24
          },
          {
            id: "34",
            text: "Having high expectations for performance",
            answer: "most-of-the-time",
            order: 25
          },
          {
            id: "35",
            text: "Having integrity",
            answer: "most-of-the-time",
            order: 26
          },
          {
            id: "37",
            text: "Individual goals are transparent",
            answer: "most-of-the-time",
            order: 27
          },
          {
            id: "38",
            text: "Learning from mistakes",
            answer: "most-of-the-time",
            order: 28
          },
          {
            id: "39",
            text: "Listening to customers",
            answer: "most-of-the-time",
            order: 29
          },
          {
            id: "42",
            text: "Paying attention to detail",
            answer: "most-of-the-time",
            order: 30
          },
          {
            id: "45",
            text: "Respecting individuals",
            answer: "most-of-the-time",
            order: 31
          },
          {
            id: "47",
            text: "Security of employment",
            answer: "most-of-the-time",
            order: 32
          },
          {
            id: "49",
            text: "Stability",
            answer: "most-of-the-time",
            order: 33
          },
          {
            id: "51",
            text: "Taking initiative",
            answer: "most-of-the-time",
            order: 34
          },
          {
            id: "52",
            text: "Urgency",
            answer: "most-of-the-time",
            order: 35
          },
          {
            id: "54",
            text: "Working in collaboration with others",
            answer: "most-of-the-time",
            order: 36
          },
          {
            id: "10",
            text: "Being customer oriented",
            answer: "sometimes",
            order: 37
          },
          {
            id: "16",
            text: "Being market driven",
            answer: "sometimes",
            order: 38
          },
          {
            id: "17",
            text: "Being people oriented",
            answer: "sometimes",
            order: 39
          },
          {
            id: "19",
            text: "Being quick to take advantage of opportunities",
            answer: "sometimes",
            order: 40
          },
          {
            id: "27",
            text: "Confronting conflict directly",
            answer: "sometimes",
            order: 41
          },
          {
            id: "40",
            text: "Making your numbers",
            answer: "sometimes",
            order: 42
          },
          {
            id: "41",
            text: "Not being constrained by many rules",
            answer: "sometimes",
            order: 43
          },
          {
            id: "43",
            text: "Predictability",
            answer: "sometimes",
            order: 44
          },
          {
            id: "44",
            text: "Putting organization's goals before unit's goals",
            answer: "sometimes",
            order: 45
          },
          {
            id: "46",
            text: "Risk-taking",
            answer: "sometimes",
            order: 46
          },
          {
            id: "50",
            text: "Taking individual responsibility",
            answer: "sometimes",
            order: 47
          },
          {
            id: "5",
            text: "Being aggressive",
            answer: "rarely",
            order: 48
          },
          {
            id: "9",
            text: "Being competitive",
            answer: "rarely",
            order: 49
          },
          {
            id: "32",
            text: "Hard-driving",
            answer: "rarely",
            order: 50
          },
          {
            id: "36",
            text: "High levels of conflict",
            answer: "rarely",
            order: 51
          },
          {
            id: "48",
            text: "Sharing information freely",
            answer: "rarely",
            order: 52
          },
          {
            id: "53",
            text: "What you know matters more than who you know",
            answer: "rarely",
            order: 53
          }
        ],
        analyses: [
          {
            groupId: "1",
            section: "adaptability",
            analysis: -0.2
          },
          {
            groupId: "1",
            section: "integrity",
            analysis: -0.32
          },
          {
            groupId: "1",
            section: "collaborative",
            analysis: -0.44
          },
          {
            groupId: "1",
            section: "results-oriented",
            analysis: 2.12
          },
          {
            groupId: "1",
            section: "customer-oriented",
            analysis: -0.32
          },
          {
            groupId: "1",
            section: "detail-oriented",
            analysis: -0.36
          },
          {
            groupId: "10",
            section: "adaptability",
            analysis: 0.1
          },
          {
            groupId: "10",
            section: "integrity",
            analysis: 0.02
          },
          {
            groupId: "10",
            section: "collaborative",
            analysis: 0.14
          },
          {
            groupId: "10",
            section: "results-oriented",
            analysis: -0.08
          },
          {
            groupId: "10",
            section: "customer-oriented",
            analysis: 1.6
          },
          {
            groupId: "10",
            section: "detail-oriented",
            analysis: 0.1
          },
          {
            groupId: "11",
            section: "adaptability",
            analysis: -0.27
          },
          {
            groupId: "11",
            section: "integrity",
            analysis: -0.03
          },
          {
            groupId: "11",
            section: "collaborative",
            analysis: -0.81
          },
          {
            groupId: "11",
            section: "results-oriented",
            analysis: 0.27
          },
          {
            groupId: "11",
            section: "customer-oriented",
            analysis: 0.24
          },
          {
            groupId: "11",
            section: "detail-oriented",
            analysis: -0.36
          },
          {
            groupId: "12",
            section: "adaptability",
            analysis: 0.33
          },
          {
            groupId: "12",
            section: "integrity",
            analysis: -0.99
          },
          {
            groupId: "12",
            section: "collaborative",
            analysis: 1.17
          },
          {
            groupId: "12",
            section: "results-oriented",
            analysis: -1.08
          },
          {
            groupId: "12",
            section: "customer-oriented",
            analysis: 0.24
          },
          {
            groupId: "12",
            section: "detail-oriented",
            analysis: -0.3
          },
          {
            groupId: "13",
            section: "adaptability",
            analysis: -0.06
          },
          {
            groupId: "13",
            section: "integrity",
            analysis: 1.44
          },
          {
            groupId: "13",
            section: "collaborative",
            analysis: 0.21
          },
          {
            groupId: "13",
            section: "results-oriented",
            analysis: -0.93
          },
          {
            groupId: "13",
            section: "customer-oriented",
            analysis: 0.15
          },
          {
            groupId: "13",
            section: "detail-oriented",
            analysis: -0.3
          },
          {
            groupId: "14",
            section: "adaptability",
            analysis: 0.03
          },
          {
            groupId: "14",
            section: "integrity",
            analysis: 2.01
          },
          {
            groupId: "14",
            section: "collaborative",
            analysis: 0.09
          },
          {
            groupId: "14",
            section: "results-oriented",
            analysis: -0.12
          },
          {
            groupId: "14",
            section: "customer-oriented",
            analysis: -0.18
          },
          {
            groupId: "14",
            section: "detail-oriented",
            analysis: 0.12
          },
          {
            groupId: "15",
            section: "adaptability",
            analysis: 1.8
          },
          {
            groupId: "15",
            section: "integrity",
            analysis: 0.27
          },
          {
            groupId: "15",
            section: "collaborative",
            analysis: -0.03
          },
          {
            groupId: "15",
            section: "results-oriented",
            analysis: 0.18
          },
          {
            groupId: "15",
            section: "customer-oriented",
            analysis: 0.12
          },
          {
            groupId: "15",
            section: "detail-oriented",
            analysis: 0.27
          },
          {
            groupId: "16",
            section: "adaptability",
            analysis: -0.1
          },
          {
            groupId: "16",
            section: "integrity",
            analysis: -0.32
          },
          {
            groupId: "16",
            section: "collaborative",
            analysis: -0.14
          },
          {
            groupId: "16",
            section: "results-oriented",
            analysis: 0.18
          },
          {
            groupId: "16",
            section: "customer-oriented",
            analysis: 1.04
          },
          {
            groupId: "16",
            section: "detail-oriented",
            analysis: -0.46
          },
          {
            groupId: "17",
            section: "adaptability",
            analysis: 0.04
          },
          {
            groupId: "17",
            section: "integrity",
            analysis: 0.02
          },
          {
            groupId: "17",
            section: "collaborative",
            analysis: 0.18
          },
          {
            groupId: "17",
            section: "results-oriented",
            analysis: -0.02
          },
          {
            groupId: "17",
            section: "customer-oriented",
            analysis: 0.4
          },
          {
            groupId: "17",
            section: "detail-oriented",
            analysis: -0.9
          },
          {
            groupId: "18",
            section: "adaptability",
            analysis: -0.81
          },
          {
            groupId: "18",
            section: "integrity",
            analysis: -0.24
          },
          {
            groupId: "18",
            section: "collaborative",
            analysis: -0.42
          },
          {
            groupId: "18",
            section: "results-oriented",
            analysis: -0.24
          },
          {
            groupId: "18",
            section: "customer-oriented",
            analysis: -0.36
          },
          {
            groupId: "18",
            section: "detail-oriented",
            analysis: 1.86
          },
          {
            groupId: "19",
            section: "adaptability",
            analysis: 0.92
          },
          {
            groupId: "19",
            section: "integrity",
            analysis: -0.68
          },
          {
            groupId: "19",
            section: "collaborative",
            analysis: -0.38
          },
          {
            groupId: "19",
            section: "results-oriented",
            analysis: -0.02
          },
          {
            groupId: "19",
            section: "customer-oriented",
            analysis: 0.3
          },
          {
            groupId: "19",
            section: "detail-oriented",
            analysis: -0.16
          },
          {
            groupId: "2",
            section: "adaptability",
            analysis: -0.12
          },
          {
            groupId: "2",
            section: "integrity",
            analysis: -0.51
          },
          {
            groupId: "2",
            section: "collaborative",
            analysis: -0.21
          },
          {
            groupId: "2",
            section: "results-oriented",
            analysis: 0.36
          },
          {
            groupId: "2",
            section: "customer-oriented",
            analysis: -0.15
          },
          {
            groupId: "2",
            section: "detail-oriented",
            analysis: -0.72
          },
          {
            groupId: "20",
            section: "adaptability",
            analysis: -0.06
          },
          {
            groupId: "20",
            section: "integrity",
            analysis: -1.32
          },
          {
            groupId: "20",
            section: "collaborative",
            analysis: -1.17
          },
          {
            groupId: "20",
            section: "results-oriented",
            analysis: -0.03
          },
          {
            groupId: "20",
            section: "customer-oriented",
            analysis: -0.69
          },
          {
            groupId: "20",
            section: "detail-oriented",
            analysis: 0.03
          },
          {
            groupId: "21",
            section: "adaptability",
            analysis: -0.36
          },
          {
            groupId: "21",
            section: "integrity",
            analysis: -0.3
          },
          {
            groupId: "21",
            section: "collaborative",
            analysis: -0.36
          },
          {
            groupId: "21",
            section: "results-oriented",
            analysis: 1.8
          },
          {
            groupId: "21",
            section: "customer-oriented",
            analysis: 0.33
          },
          {
            groupId: "21",
            section: "detail-oriented",
            analysis: -0.36
          },
          {
            groupId: "22",
            section: "adaptability",
            analysis: -1.89
          },
          {
            groupId: "22",
            section: "integrity",
            analysis: -0.36
          },
          {
            groupId: "22",
            section: "collaborative",
            analysis: -0.33
          },
          {
            groupId: "22",
            section: "results-oriented",
            analysis: 0.15
          },
          {
            groupId: "22",
            section: "customer-oriented",
            analysis: -0.15
          },
          {
            groupId: "22",
            section: "detail-oriented",
            analysis: 0.33
          },
          {
            groupId: "23",
            section: "adaptability",
            analysis: -0.21
          },
          {
            groupId: "23",
            section: "integrity",
            analysis: 0.51
          },
          {
            groupId: "23",
            section: "collaborative",
            analysis: 1.32
          },
          {
            groupId: "23",
            section: "results-oriented",
            analysis: -1.08
          },
          {
            groupId: "23",
            section: "customer-oriented",
            analysis: -0.09
          },
          {
            groupId: "23",
            section: "detail-oriented",
            analysis: -0.03
          },
          {
            groupId: "24",
            section: "adaptability",
            analysis: 0.08
          },
          {
            groupId: "24",
            section: "integrity",
            analysis: 0.48
          },
          {
            groupId: "24",
            section: "collaborative",
            analysis: 2.6
          },
          {
            groupId: "24",
            section: "results-oriented",
            analysis: 0.4
          },
          {
            groupId: "24",
            section: "customer-oriented",
            analysis: -0.12
          },
          {
            groupId: "24",
            section: "detail-oriented",
            analysis: 0.08
          },
          {
            groupId: "25",
            section: "adaptability",
            analysis: 1.68
          },
          {
            groupId: "25",
            section: "integrity",
            analysis: 1.26
          },
          {
            groupId: "25",
            section: "collaborative",
            analysis: 0.06
          },
          {
            groupId: "25",
            section: "results-oriented",
            analysis: -0.81
          },
          {
            groupId: "25",
            section: "customer-oriented",
            analysis: 0.03
          },
          {
            groupId: "25",
            section: "detail-oriented",
            analysis: -1.02
          },
          {
            groupId: "26",
            section: "adaptability",
            analysis: 1.77
          },
          {
            groupId: "26",
            section: "integrity",
            analysis: -0.3
          },
          {
            groupId: "26",
            section: "collaborative",
            analysis: -0.15
          },
          {
            groupId: "26",
            section: "results-oriented",
            analysis: -0.36
          },
          {
            groupId: "26",
            section: "customer-oriented",
            analysis: -0.24
          },
          {
            groupId: "26",
            section: "detail-oriented",
            analysis: -0.27
          },
          {
            groupId: "27",
            section: "adaptability",
            analysis: 0.22
          },
          {
            groupId: "27",
            section: "integrity",
            analysis: 0.04
          },
          {
            groupId: "27",
            section: "collaborative",
            analysis: -0.94
          },
          {
            groupId: "27",
            section: "results-oriented",
            analysis: 0.22
          },
          {
            groupId: "27",
            section: "customer-oriented",
            analysis: -0.32
          },
          {
            groupId: "27",
            section: "detail-oriented",
            analysis: 0.24
          },
          {
            groupId: "28",
            section: "adaptability",
            analysis: -0.27
          },
          {
            groupId: "28",
            section: "integrity",
            analysis: 0.09
          },
          {
            groupId: "28",
            section: "collaborative",
            analysis: 1.8
          },
          {
            groupId: "28",
            section: "results-oriented",
            analysis: -0.48
          },
          {
            groupId: "28",
            section: "customer-oriented",
            analysis: -0.24
          },
          {
            groupId: "28",
            section: "detail-oriented",
            analysis: -0.06
          },
          {
            groupId: "29",
            section: "adaptability",
            analysis: -0.24
          },
          {
            groupId: "29",
            section: "integrity",
            analysis: -1.2
          },
          {
            groupId: "29",
            section: "collaborative",
            analysis: -0.03
          },
          {
            groupId: "29",
            section: "results-oriented",
            analysis: 0.24
          },
          {
            groupId: "29",
            section: "customer-oriented",
            analysis: -0.03
          },
          {
            groupId: "29",
            section: "detail-oriented",
            analysis: -0.72
          },
          {
            groupId: "3",
            section: "adaptability",
            analysis: 1.23
          },
          {
            groupId: "3",
            section: "integrity",
            analysis: -0.81
          },
          {
            groupId: "3",
            section: "collaborative",
            analysis: 0.06
          },
          {
            groupId: "3",
            section: "results-oriented",
            analysis: -0.21
          },
          {
            groupId: "3",
            section: "customer-oriented",
            analysis: 0.09
          },
          {
            groupId: "3",
            section: "detail-oriented",
            analysis: -0.36
          },
          {
            groupId: "30",
            section: "adaptability",
            analysis: -0.12
          },
          {
            groupId: "30",
            section: "integrity",
            analysis: 0.27
          },
          {
            groupId: "30",
            section: "collaborative",
            analysis: 0
          },
          {
            groupId: "30",
            section: "results-oriented",
            analysis: -0.33
          },
          {
            groupId: "30",
            section: "customer-oriented",
            analysis: 0.75
          },
          {
            groupId: "30",
            section: "detail-oriented",
            analysis: 1.86
          },
          {
            groupId: "31",
            section: "adaptability",
            analysis: 1.53
          },
          {
            groupId: "31",
            section: "integrity",
            analysis: -1.11
          },
          {
            groupId: "31",
            section: "collaborative",
            analysis: -0.63
          },
          {
            groupId: "31",
            section: "results-oriented",
            analysis: 0.3
          },
          {
            groupId: "31",
            section: "customer-oriented",
            analysis: -0.39
          },
          {
            groupId: "31",
            section: "detail-oriented",
            analysis: -0.3
          },
          {
            groupId: "32",
            section: "adaptability",
            analysis: 0.04
          },
          {
            groupId: "32",
            section: "integrity",
            analysis: -0.33
          },
          {
            groupId: "32",
            section: "collaborative",
            analysis: -0.44
          },
          {
            groupId: "32",
            section: "results-oriented",
            analysis: 0.28
          },
          {
            groupId: "32",
            section: "customer-oriented",
            analysis: -0.17
          },
          {
            groupId: "32",
            section: "detail-oriented",
            analysis: -0.07
          },
          {
            groupId: "33",
            section: "adaptability",
            analysis: -0.15
          },
          {
            groupId: "33",
            section: "integrity",
            analysis: 2.28
          },
          {
            groupId: "33",
            section: "collaborative",
            analysis: 0.21
          },
          {
            groupId: "33",
            section: "results-oriented",
            analysis: 0.03
          },
          {
            groupId: "33",
            section: "customer-oriented",
            analysis: 0.06
          },
          {
            groupId: "33",
            section: "detail-oriented",
            analysis: 0.12
          },
          {
            groupId: "34",
            section: "adaptability",
            analysis: 0.39
          },
          {
            groupId: "34",
            section: "integrity",
            analysis: -0.21
          },
          {
            groupId: "34",
            section: "collaborative",
            analysis: -0.24
          },
          {
            groupId: "34",
            section: "results-oriented",
            analysis: 1.74
          },
          {
            groupId: "34",
            section: "customer-oriented",
            analysis: -0.21
          },
          {
            groupId: "34",
            section: "detail-oriented",
            analysis: 0.06
          },
          {
            groupId: "35",
            section: "adaptability",
            analysis: -0.03
          },
          {
            groupId: "35",
            section: "integrity",
            analysis: 2.31
          },
          {
            groupId: "35",
            section: "collaborative",
            analysis: 0.24
          },
          {
            groupId: "35",
            section: "results-oriented",
            analysis: -0.06
          },
          {
            groupId: "35",
            section: "customer-oriented",
            analysis: -0.09
          },
          {
            groupId: "35",
            section: "detail-oriented",
            analysis: 0.06
          },
          {
            groupId: "36",
            section: "adaptability",
            analysis: -0.59
          },
          {
            groupId: "36",
            section: "integrity",
            analysis: -0.35
          },
          {
            groupId: "36",
            section: "collaborative",
            analysis: -0.43
          },
          {
            groupId: "36",
            section: "results-oriented",
            analysis: -0.02
          },
          {
            groupId: "36",
            section: "customer-oriented",
            analysis: 0.01
          },
          {
            groupId: "36",
            section: "detail-oriented",
            analysis: -0.11
          },
          {
            groupId: "37",
            section: "adaptability",
            analysis: -0.06
          },
          {
            groupId: "37",
            section: "integrity",
            analysis: 1.2
          },
          {
            groupId: "37",
            section: "collaborative",
            analysis: 0.33
          },
          {
            groupId: "37",
            section: "results-oriented",
            analysis: -0.48
          },
          {
            groupId: "37",
            section: "customer-oriented",
            analysis: 0.21
          },
          {
            groupId: "37",
            section: "detail-oriented",
            analysis: -0.9
          },
          {
            groupId: "38",
            section: "adaptability",
            analysis: 2.37
          },
          {
            groupId: "38",
            section: "integrity",
            analysis: -1.05
          },
          {
            groupId: "38",
            section: "collaborative",
            analysis: -0.81
          },
          {
            groupId: "38",
            section: "results-oriented",
            analysis: 0.06
          },
          {
            groupId: "38",
            section: "customer-oriented",
            analysis: -0.69
          },
          {
            groupId: "38",
            section: "detail-oriented",
            analysis: -0.54
          },
          {
            groupId: "39",
            section: "adaptability",
            analysis: 0
          },
          {
            groupId: "39",
            section: "integrity",
            analysis: 0.15
          },
          {
            groupId: "39",
            section: "collaborative",
            analysis: 0.18
          },
          {
            groupId: "39",
            section: "results-oriented",
            analysis: 0
          },
          {
            groupId: "39",
            section: "customer-oriented",
            analysis: 2.37
          },
          {
            groupId: "39",
            section: "detail-oriented",
            analysis: 0.24
          },
          {
            groupId: "4",
            section: "adaptability",
            analysis: -1.14
          },
          {
            groupId: "4",
            section: "integrity",
            analysis: -0.48
          },
          {
            groupId: "4",
            section: "collaborative",
            analysis: 1.29
          },
          {
            groupId: "4",
            section: "results-oriented",
            analysis: -0.87
          },
          {
            groupId: "4",
            section: "customer-oriented",
            analysis: -0.21
          },
          {
            groupId: "4",
            section: "detail-oriented",
            analysis: -0.27
          },
          {
            groupId: "40",
            section: "adaptability",
            analysis: -0.86
          },
          {
            groupId: "40",
            section: "integrity",
            analysis: -0.22
          },
          {
            groupId: "40",
            section: "collaborative",
            analysis: -0.34
          },
          {
            groupId: "40",
            section: "results-oriented",
            analysis: 0.78
          },
          {
            groupId: "40",
            section: "customer-oriented",
            analysis: 0.36
          },
          {
            groupId: "40",
            section: "detail-oriented",
            analysis: -0.6
          },
          {
            groupId: "41",
            section: "adaptability",
            analysis: 0.84
          },
          {
            groupId: "41",
            section: "integrity",
            analysis: -0.36
          },
          {
            groupId: "41",
            section: "collaborative",
            analysis: 0.02
          },
          {
            groupId: "41",
            section: "results-oriented",
            analysis: -0.54
          },
          {
            groupId: "41",
            section: "customer-oriented",
            analysis: -0.46
          },
          {
            groupId: "41",
            section: "detail-oriented",
            analysis: -0.48
          },
          {
            groupId: "42",
            section: "adaptability",
            analysis: -0.24
          },
          {
            groupId: "42",
            section: "integrity",
            analysis: -0.09
          },
          {
            groupId: "42",
            section: "collaborative",
            analysis: 0.06
          },
          {
            groupId: "42",
            section: "results-oriented",
            analysis: 0.27
          },
          {
            groupId: "42",
            section: "customer-oriented",
            analysis: -0.36
          },
          {
            groupId: "42",
            section: "detail-oriented",
            analysis: 2.22
          },
          {
            groupId: "43",
            section: "adaptability",
            analysis: -1.26
          },
          {
            groupId: "43",
            section: "integrity",
            analysis: -0.12
          },
          {
            groupId: "43",
            section: "collaborative",
            analysis: -0.02
          },
          {
            groupId: "43",
            section: "results-oriented",
            analysis: -0.36
          },
          {
            groupId: "43",
            section: "customer-oriented",
            analysis: 0.1
          },
          {
            groupId: "43",
            section: "detail-oriented",
            analysis: -0.18
          },
          {
            groupId: "44",
            section: "adaptability",
            analysis: -0.02
          },
          {
            groupId: "44",
            section: "integrity",
            analysis: -0.48
          },
          {
            groupId: "44",
            section: "collaborative",
            analysis: 0.36
          },
          {
            groupId: "44",
            section: "results-oriented",
            analysis: 0.08
          },
          {
            groupId: "44",
            section: "customer-oriented",
            analysis: -0.1
          },
          {
            groupId: "44",
            section: "detail-oriented",
            analysis: -0.26
          },
          {
            groupId: "45",
            section: "adaptability",
            analysis: 0
          },
          {
            groupId: "45",
            section: "integrity",
            analysis: 1.59
          },
          {
            groupId: "45",
            section: "collaborative",
            analysis: 1.05
          },
          {
            groupId: "45",
            section: "results-oriented",
            analysis: -0.6
          },
          {
            groupId: "45",
            section: "customer-oriented",
            analysis: -0.09
          },
          {
            groupId: "45",
            section: "detail-oriented",
            analysis: -0.33
          },
          {
            groupId: "46",
            section: "adaptability",
            analysis: 1.18
          },
          {
            groupId: "46",
            section: "integrity",
            analysis: -0.3
          },
          {
            groupId: "46",
            section: "collaborative",
            analysis: -0.54
          },
          {
            groupId: "46",
            section: "results-oriented",
            analysis: 0.02
          },
          {
            groupId: "46",
            section: "customer-oriented",
            analysis: -0.04
          },
          {
            groupId: "46",
            section: "detail-oriented",
            analysis: -0.26
          },
          {
            groupId: "47",
            section: "adaptability",
            analysis: -0.48
          },
          {
            groupId: "47",
            section: "integrity",
            analysis: -0.03
          },
          {
            groupId: "47",
            section: "collaborative",
            analysis: -0.21
          },
          {
            groupId: "47",
            section: "results-oriented",
            analysis: -1.71
          },
          {
            groupId: "47",
            section: "customer-oriented",
            analysis: -0.27
          },
          {
            groupId: "47",
            section: "detail-oriented",
            analysis: -0.33
          },
          {
            groupId: "48",
            section: "adaptability",
            analysis: -0.34
          },
          {
            groupId: "48",
            section: "integrity",
            analysis: -0.11
          },
          {
            groupId: "48",
            section: "collaborative",
            analysis: 0.3
          },
          {
            groupId: "48",
            section: "results-oriented",
            analysis: -0.24
          },
          {
            groupId: "48",
            section: "customer-oriented",
            analysis: 0.03
          },
          {
            groupId: "48",
            section: "detail-oriented",
            analysis: -0.09
          },
          {
            groupId: "49",
            section: "adaptability",
            analysis: 0.03
          },
          {
            groupId: "49",
            section: "integrity",
            analysis: -1.11
          },
          {
            groupId: "49",
            section: "collaborative",
            analysis: -0.36
          },
          {
            groupId: "49",
            section: "results-oriented",
            analysis: -0.24
          },
          {
            groupId: "49",
            section: "customer-oriented",
            analysis: -0.63
          },
          {
            groupId: "49",
            section: "detail-oriented",
            analysis: -1.95
          },
          {
            groupId: "5",
            section: "adaptability",
            analysis: 0.02
          },
          {
            groupId: "5",
            section: "integrity",
            analysis: -0.26
          },
          {
            groupId: "5",
            section: "collaborative",
            analysis: -0.51
          },
          {
            groupId: "5",
            section: "results-oriented",
            analysis: 0.26
          },
          {
            groupId: "5",
            section: "customer-oriented",
            analysis: -0.14
          },
          {
            groupId: "5",
            section: "detail-oriented",
            analysis: -0.1
          },
          {
            groupId: "50",
            section: "adaptability",
            analysis: -0.32
          },
          {
            groupId: "50",
            section: "integrity",
            analysis: -0.02
          },
          {
            groupId: "50",
            section: "collaborative",
            analysis: -0.76
          },
          {
            groupId: "50",
            section: "results-oriented",
            analysis: -0.22
          },
          {
            groupId: "50",
            section: "customer-oriented",
            analysis: 0.04
          },
          {
            groupId: "50",
            section: "detail-oriented",
            analysis: -0.64
          },
          {
            groupId: "51",
            section: "adaptability",
            analysis: -0.09
          },
          {
            groupId: "51",
            section: "integrity",
            analysis: -0.03
          },
          {
            groupId: "51",
            section: "collaborative",
            analysis: -0.03
          },
          {
            groupId: "51",
            section: "results-oriented",
            analysis: 0.33
          },
          {
            groupId: "51",
            section: "customer-oriented",
            analysis: 0.12
          },
          {
            groupId: "51",
            section: "detail-oriented",
            analysis: -2.1
          },
          {
            groupId: "52",
            section: "adaptability",
            analysis: -0.15
          },
          {
            groupId: "52",
            section: "integrity",
            analysis: -0.27
          },
          {
            groupId: "52",
            section: "collaborative",
            analysis: -1.68
          },
          {
            groupId: "52",
            section: "results-oriented",
            analysis: 0.39
          },
          {
            groupId: "52",
            section: "customer-oriented",
            analysis: -0.12
          },
          {
            groupId: "52",
            section: "detail-oriented",
            analysis: -0.45
          },
          {
            groupId: "53",
            section: "adaptability",
            analysis: -0.63
          },
          {
            groupId: "53",
            section: "integrity",
            analysis: -0.24
          },
          {
            groupId: "53",
            section: "collaborative",
            analysis: -0.76
          },
          {
            groupId: "53",
            section: "results-oriented",
            analysis: 0.24
          },
          {
            groupId: "53",
            section: "customer-oriented",
            analysis: -0.63
          },
          {
            groupId: "53",
            section: "detail-oriented",
            analysis: -0.06
          },
          {
            groupId: "54",
            section: "adaptability",
            analysis: 0.09
          },
          {
            groupId: "54",
            section: "integrity",
            analysis: 0.18
          },
          {
            groupId: "54",
            section: "collaborative",
            analysis: 2.13
          },
          {
            groupId: "54",
            section: "results-oriented",
            analysis: 0.33
          },
          {
            groupId: "54",
            section: "customer-oriented",
            analysis: -0.09
          },
          {
            groupId: "54",
            section: "detail-oriented",
            analysis: 0
          },
          {
            groupId: "6",
            section: "adaptability",
            analysis: -0.39
          },
          {
            groupId: "6",
            section: "integrity",
            analysis: -0.81
          },
          {
            groupId: "6",
            section: "collaborative",
            analysis: -0.45
          },
          {
            groupId: "6",
            section: "results-oriented",
            analysis: 0.12
          },
          {
            groupId: "6",
            section: "customer-oriented",
            analysis: -0.81
          },
          {
            groupId: "6",
            section: "detail-oriented",
            analysis: 0.27
          },
          {
            groupId: "7",
            section: "adaptability",
            analysis: 0.48
          },
          {
            groupId: "7",
            section: "integrity",
            analysis: -0.6
          },
          {
            groupId: "7",
            section: "collaborative",
            analysis: 0.39
          },
          {
            groupId: "7",
            section: "results-oriented",
            analysis: -0.3
          },
          {
            groupId: "7",
            section: "customer-oriented",
            analysis: 0.09
          },
          {
            groupId: "7",
            section: "detail-oriented",
            analysis: -0.48
          },
          {
            groupId: "8",
            section: "adaptability",
            analysis: -1.92
          },
          {
            groupId: "8",
            section: "integrity",
            analysis: -0.27
          },
          {
            groupId: "8",
            section: "collaborative",
            analysis: 0.15
          },
          {
            groupId: "8",
            section: "results-oriented",
            analysis: -0.75
          },
          {
            groupId: "8",
            section: "customer-oriented",
            analysis: -0.27
          },
          {
            groupId: "8",
            section: "detail-oriented",
            analysis: 0.45
          },
          {
            groupId: "9",
            section: "adaptability",
            analysis: -0.01
          },
          {
            groupId: "9",
            section: "integrity",
            analysis: -0.2
          },
          {
            groupId: "9",
            section: "collaborative",
            analysis: -0.45
          },
          {
            groupId: "9",
            section: "results-oriented",
            analysis: 0.01
          },
          {
            groupId: "9",
            section: "customer-oriented",
            analysis: -0.09
          },
          {
            groupId: "9",
            section: "detail-oriented",
            analysis: -0.3
          }
        ]
      }
    },
    searchView: null,
    subjects: [
      {
        name: "Building large-applications in Vue",
        author: "John Doe"
      },
      {
        name: "Best Frontend Frameworks of 2020 for Web Development",
        author: "Jane Doe"
      },
      {
        name: "Which Backend Framework Is Right for Your Project?",
        author: "John Doe"
      },
      {
        name: "FastAPI - The Good, the bad and the ugly",
        author: "Jane Doe"
      },
      {
        name: "When to use Sass mixins, extends and variables",
        author: "John Doe"
      }
    ]
  },
  mutations: {
    setSearchView(state, newSearchView) {
      state.searchView = newSearchView;
    },
    setUser(state, newUser) {
      state.user = newUser;
    }
  },
  getters: {
    searchView(state) {
      return state.searchView;
    },
    user(state) {
      return state.user;
    }
  },
  actions: {
    async getUser({ commit }, username) {
      let response;
      try {
        response = await axios.get(`https://torre.bio/api/bios/${username}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (err) {
        console.info(err);
      }
      commit("setUser", response);
      return response;
    }
  },
  modules: {}
});
