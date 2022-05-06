let data = [
  {
    titel: "Democratic processes",
    spørgsmål: [
      {
        info: "8. Board members are democratically (re‐)appointed according to clear procedures.",
        underspørgsmål: [
          '8.1 Do the organisation’s statutes and, where applicable, internal regulations contain procedures for the appointment and reappointment of the members of the board?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '8.2 Do the rules governing elections cover information on people qualified to vote; majority or percentage needed to win the election and, where applicable, weighting of votes; quorum; and election rounds?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '8.3 Do the rules governing elections ensure that the general assembly directly elects the majority of the members of the board?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '8.4 Do the rules governing elections ensure that elections take place on the basis of secret ballots?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "9. The organisation takes steps to achieve a differentiated and balanced composition of its board.",
        underspørgsmål: [
          '9.1 Does the board have a document establishing the desired profile (responsibilities, background, competences) of each board function?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '9.2 Does the document motivate these profiles based on the organisation’s (long-term) policy objectives?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '9.3 Has the document been approved by the general assembly?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '9.4 Does the board have a document establishing that the board periodically evaluates the actual and desired profiles and when a vacancy occurs?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "10. The organisation has a nomination committee.",
        underspørgsmål: [
          '10.1 Do the organisation’s statutes and/or internal regulations establish a nomination committee that oversees the (re-)election process of the members of the board?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '10.2 Do the organisation’s statutes and/or internal regulations establish that the president of the board cannot act as the president of the nomination committee?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '10.3 Do the organisation’s statutes and/or internal regulations establish that at least one member of the nomination committee should not be a member of the board?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '10.4 Do the organisation’s statutes and/or internal regulations establish that the tasks of the nomination committee include searching for candidates for vacant board mandates?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '10.5 Do the organisation’s statutes and/or internal regulations establish that the tasks of the nomination committee include searching for candidates for vacant management positions?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '10.6 Do the organisation’s statutes and/or internal regulations establish that the tasks of the nomination committee include identifying gaps relating to the skill, expertise and differentiated composition of the board?<SPAN STYLE="color:#77A9D6"> IA</SPAN>'
        ]
      },
      {
        info: "11. The organisation establishes a quorum (a minimum number of attendees required to conduct business and to cast votes) in its statutes or internal regulations for the board and the general assembly.",
        underspørgsmål: [
          '11.1 Does the organisation establish a quorum in its statutes or internal regulations for the board?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '11.2 Does the organisation establish a quorum in its statutes or internal regulations for the general assembly?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '11.3 Does the organisation establish a quorum of at least 75% in its statutes or internal regulations for the board?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '11.4 Does the organisation establish a quorum of at least 50% in its statutes or internal regulations for the general assembly?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "12. The organisation has established term limits as well as a retirement schedule.",
        underspørgsmål: [
          '12.1 Do the organisation’s statutes establish term limits for board members?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '12.2 Does the organisation implement a phased schedule for the retirement of board members, establishing that only a proportion of the members is replaced every time (guaranteeing the continuity of the board)?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "13. The general assembly represents all affiliated members and meets at least once a year.",
        underspørgsmål: [
          '13.1 Does the general assembly represent all the organisation’s affiliated members either through direct or indirect representation?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '13.2 Do the organisation’s statutes establish that the general assembly meets at least once a year?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '13.3 Do the organisation’s statutes and/ or internal regulations establish procedures that make it possible to convene emergency and extraordinary meetings?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '13.4 Do the organisation’s statutes and/ or internal regulations establish that the members of the general assembly have the opportunity to vote in absentia (e.g., by proxy via communication technology)?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "14. The board meets regularly.",
        underspørgsmål: [
          '14.1 Did the board meet at least five times during the past twelve months?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '14.2 Do the organisation’s statutes or internal regulations establish that the board must meet at least five times a year?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '14.3 Do the organisation’s internal regulations establish the procedures for drawing up the agenda for every meeting?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '14.4 Do the organisation’s internal regulations establish the meeting proceedings?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '14.5 Do the organisation’s internal regulations establish the procedures for the adoption of decisions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "15. The organisation ensures the participation of athletes its policy processes.",
        underspørgsmål: [
          '15.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at involving athletes in its policy processes?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '15.2 Are athletes formally represented within the organisation (e.g. via a consultative body)?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '15.3 Is the multi-annual policy plan adopted in consultation with athletes?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '15.4 Does the organisation undertake other actions aimed at involving athletes in its decision-making procedures?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      },
      {
        info: "16. The organisation ensures the participation of referees its policy processes.",
        underspørgsmål: [
          '16.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at involving referees in its policy processes?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '16.2 Are referees formally represented within the organisation (e.g. via a consultative body)?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '16.3 Is the multi-annual policy plan adopted in consultation with referees?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '16.4 Does the organisation undertake other actions aimed at involving referees in its decision-making procedures?<SPAN STYLE="color:#77A9D6"> IA</SPAN>'
        ]
      },
      {
        info: "17. The organisation ensures the participation of coaches its policy processes.",
        underspørgsmål: [
          '17.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at involving coaches in its policy processes?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '17.2 Are coaches formally represented within the organisation (e.g. via a consultative body)?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '17.3 Is the multi-annual policy plan adopted in consultation with coaches?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '17.4 Does the organisation undertake other actions aimed at involving coaches in its decision-making procedures?<SPAN STYLE="color:#77A9D6"> IA</SPAN>'
        ]
      },
      {
        info: "18. The organisation ensures the participation of volunteers its policy processes.",
        underspørgsmål: [
          '18.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at involving volunteers in its policy processes?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '18.2 Are volunteers formally represented within the organisation (e.g. via a consultative body)?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '18.3 Is the multi-annual policy plan adopted in consultation with volunteers?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '18.4 Does the organisation undertake other actions aimed at involving volunteers in its decision-making procedures?<SPAN STYLE="color:#77A9D6"> IA</SPAN>'
        ]
      },
      {
        info: "19. The organisation ensures the participation of employees its policy processes.",
        underspørgsmål: [
          '19.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at involving its employees in its policy processes?<SPAN STYLE="color:#F7941E"> A</SPAN>',
          '19.2 Are employees formally represented within the organisation (e.g. via a consultative body)?<SPAN STYLE="color:#F7941E"> A</SPAN>',
          '19.3 Is the multi-annual policy plan adopted in consultation with its employees?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '19.4 Does the organisation undertake other actions aimed at involving its employees in its decision-making procedures?<SPAN STYLE="color:#F7941E"> A</SPAN>'
        ]
      },
      {
        info: "20. The organisation implements a gender equality policy.",
        underspørgsmål: [
          '20.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at encouraging the equal access to representation for women and men in all stages of the decision- making process?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '20.2 Does the organisation implement gender sensitive procedures for identifying candidates for positions awarded as part of electoral procedures?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '20.3 Does the organisation implement gender sensitive procedures for identifying candidates for positions awarded as part of human resources policies?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '20.4 Does the organisation have a gender balanced representation of women and men on the nomination committee seeking candidates for decision-making positions?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '20.5 Does the organisation undertake actions aimed at the reconciliation of family responsibilities and professional or elective obligations for board members and staff?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '20.6 Does the organisation undertake other actions aimed at promoting gender equality internally?<SPAN STYLE="color:#77A9D6"> IA</SPAN>'
        ]
      }
    ]
  }
];
