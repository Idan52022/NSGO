let data = [
  {
    titel: "Societal responsibility",
    spørgsmål: [
      {
        info: "35. The organisation offers consulting to its member organisations in the areas of management or governance.",
        underspørgsmål: [
          '35.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions to be taken regarding the consulting of its member organisations in the areas of management or governance?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '35.2 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters related to management and/ or governance consulting?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '35.3 Does the organisation provide some form of consulting to member organisations in the areas of management or governance through knowledge transfer?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '35.4 Does this consulting include the organisation of workshops or training sessions?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '35.5 Does this consulting include tailored (one-on-one) advice?<SPAN STYLE="color:#F7941E"> A</SPAN>',
          '35.6 Does this consulting include the distribution of templates or good practices?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '35.7 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "36. The organisation implements a policy aimed at mitigating the health risks of sporting activities.",
        underspørgsmål: [
          '36.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at mitigating the health risks of sporting activities?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '36.2 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding the health risks of sporting activities?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '36.3 Does the organisation undertake actions aimed at informing athletes of the specific risks associated with the sport in question?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '36.4 Does the organisation undertake actions aimed at preventing or mitigating the specific risks associated with the sport in question?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '36.5 Did the organisation conduct an analysis of the specific risks associated with the sport in question?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '36.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "37. The organisation implements a policy on combating sexual harassment in sport.",
        underspørgsmål: [
          '37.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at combating sexual harassment in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '37.2 Does the organisation have a code of conduct which outlines rules aimed at promoting the physical integrity of athletes?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '37.3 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding combating sexual harassment in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '37.4 Does the organisation cooperate with other organisations with a view of combating sexual harassment in sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '37.5 Does the organisation promote the exchange of best practices on combating sexual harassment among its member organisations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '37.6 Does the organisation undertake other actions aimed at raising awareness for sexual harassment issues?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '37.7 Do the organisation’s statutes and/ or internal regulations establish procedures for processing complaints about unwanted sexual behaviour?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '37.8 Does the procedure contain rules for submitting complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '37.9 Does the procedure contain rules for investigating complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '37.10 Does the procedure contain rules for notifying the person who submitted the complaint about the outcome of the investigation?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '37.11 Does the procedure contain rules for the establishment of an independent tribunal?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '37.12 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "38. The organisation implements an anti‐doping policy.",
        underspørgsmål: [
          '38.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at preventing, detecting, and combating doping practices?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '38.2 Does the organisation implement disciplinary rules to combat doping in conformity with the World Anti-Doping Code?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '38.3 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding combating doping in sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '38.4 Does the organisation undertake actions aimed at raising awareness for anti-doping rules?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '38.5 Does the organisation undertake actions aimed at educating athletes on the dangers of doping use?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '38.6 Does the organisation implement formal procedures establishing its cooperation with the National Anti-Doping Authority?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '38.7 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "39. The organisation implements a policy on social inclusion through sport.",
        underspørgsmål: [
          '39.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at improving the social, cultural, educational or psychological circumstances of marginalised and/or fractured communities through sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '39.2 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding social inclusion through sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '39.3 Does the organisation promote the exchange of best practices on social inclusion among its member organisations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '39.4 Does the organisation cooperate with other organisations with a view of improving the social, cultural, educational or psychological circumstances of marginalised and/or fractured communities through sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '39.5 Does the organisation undertake other actions aimed at improving the social, cultural, educational or psychological circumstances of marginalised and/or fractured communities through sport?<SPAN STYLE="color:#F7941E"> A</SPAN>',
          '39.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "40. The organisation implements a policy combating discrimination in sport.",
        underspørgsmål: [
          '40.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at combating discrimination in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.2 Does the organisation have a code of conduct which outlines rules aimed at combating discrimination in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.3 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding discrimination in sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '40.4 Does the organisation cooperate with other organisations with a view of combating discrimination in sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '40.5 Does the organisation undertake actions aimed at raising awareness for discrimination issues?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.6 Do the organisation’s statutes and/ or internal regulations establish procedures for processing complaints about discrimination?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.7 Does the procedure contain rules for submitting complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.8 Does the procedure contain rules for investigating complaints?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.9 Does the procedure contain clearly defined rules for notifying the person who submitted the complaint about the outcome of the investigation?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.10 Does the procedure contain rules for the establishment of an independent tribunal?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '40.11 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "41. The organisation implements a policy to promote gender equality in sport.",
        underspørgsmål: [
          '41.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at promoting gender equality in sport?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '41.2 Does the organisation raise awareness via educational materials for all decision makers on the importance of having a diverse representation on decision-making organs throughout the sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '41.3 Does the organisation undertake actions aimed at supporting (future) leaders of both sexes through either formal training or informal arrangements (e.g. mentoring system)?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '41.4 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding gender equality issues?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '41.5 Does the organisation cooperate with other organisations with a view of promoting gender equality in sport?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '41.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#77A9D6"> IA</SPAN>'
        ]
      }, 
      {
        info: "42. The organisation implements a policy to combat match‐fixing.",
        underspørgsmål: [
          '42.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at combating match-fixing?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '42.2 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding match-fixing issues?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '42.3 Does the organisation implement disciplinary rules to combat match-fixing?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '42.4 Do these rules include provisions banning any member of the federation from placing a bet related to youth leagues and a competition or match that he/she may (in)directly influence?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '42.5 Do these rules include provisions banning any member of the federation from spreading confidential information which may reasonably be expected to be used in the framework of a bet?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '42.6 Do these rules include provisions establishing the obligation for every member of the federation to report any requests to unduly influence competitions or matches to the federation?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '42.7 Do these rules include provisions establishing the procedure for punishing any violations of the above rules?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '42.8 Does the organisation undertake actions to educate elite athletes, promising young athletes, coaches, referees, trainers, and clubs about risks relating to match-fixing?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '42.9 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "43. The organisation implements a policy for the promotion of environmental sustainability.",
        underspørgsmål: [
          '43.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at promoting environmental sustainability?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '43.2 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding promoting environmental sustainability?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '43.3 Does the organisation undertake actions aimed at promoting the environmental sustainability of the sporting events it (co-)organises?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '43.4 Does the organisation undertake actions aimed at promoting the exchange of best practices on environmental sustainability among its member organisations?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '43.5 Does the organisation undertake other actions (not related to the exchange of best practices) aimed at promoting the environmental sustainability of sporting activities?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '43.6 Does the organisation cooperate with other organisations with a view of promoting the environmental sustainability of sporting activities?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '43.7 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "44. The organisation implements a policy on promoting the dual career of athletes.",
        underspørgsmål: [
          '44.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at helping athletes combine their sporting career with education or work?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '44.2 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for all matters regarding dual careers?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '44.3 Does the organisation undertake actions aimed at promoting the exchange of best practices on dual careers with its member organisations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '44.4 Does the organisation undertake other actions aimed at promoting and supporting the inclusion of the concept of dual careers in the activities of its member organisations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '44.5 Does the organisation cooperate with other organisations with a view of helping athletes combine their sporting career with education or work?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '44.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "45. The organisation implements a policy on promoting sport for all.",
        underspørgsmål: [
          '45.1 Does the organisation have a formal (written) policy that outlines objectives and specific actions aimed at promoting sport for all?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '45.2 Does the organisation have a designated staff member who formally acts as a single point of contact and is responsible for sport for all?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '45.3 Does the organisation undertake actions aimed at promoting sport for all?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '45.4 Does the organisation undertake other actions aimed at promoting and supporting sport for all in the activities of its member organisations?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '45.5 Does the organisation cooperate with other organisations with a view of promoting sport for all?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '45.6 Did the organisation carry out an evaluation of the impact of its relevant actions?<SPAN STYLE="color:#266A93"> BIA</SPAN>'
        ]
      }, 
      {
        info: "46. The organisation ensures the fair treatment of professional athletes.",
        underspørgsmål: [
          '46.1 Does the organisation implement the use of minimum requirements of standard athlete contracts?<SPAN STYLE="color:#266A93"> BIA</SPAN>',
          '46.2 Do these minimum requirements include a standard on minimum wages?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '46.3 Do these minimum requirements include a standard on internal disciplinary rules with sanctions/penalties (fines) and the necessary procedures?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '46.4 Do these minimum requirements include a standard on the process for the resolution of disputes not covered by the contract?<SPAN STYLE="color:#77A9D6"> IA</SPAN>',
          '46.5 Does the organisation undertake actions aimed at promoting social dialogue (between athletes and clubs)?<SPAN STYLE="color:#F7941E"> A</SPAN>'
        ]
      }
    ]
  } 
];
