---
title: Model Limitations
sidebar_position: 5
---

# Model Limitations

Unlike ordinary software, large language models are massive neural networks. These networks learn from a broad range of data, rather than being programmed explicitly. People use language and images to describe the world and to express their beliefs, assumptions, attitudes, and values. As a result, publicly available text and image data typically used to train large-scale natural language processing models contain societal biases relating to race, gender, religion, age, and other groups of people, as well as other undesirable content. These societal biases are reflected in the distributions of words, phrases, and syntactic structures. Large-scale natural language models trained with such data can potentially behave in ways that are unfair, unreliable, or offensive, in turn causing harm. Some of the risks inherent to large language models are:

- *Information reliability*: Language model responses can fabricate content that may sound reasonable but is nonsensical or inaccurate with respect to external validation sources. Even when drawing responses from trusted source information, responses may misrepresent that content.
- *Allocation*: These models can be used in ways that lead to unfair allocation of resources or opportunities. For example, automated resume screening systems can withhold employment opportunities from one gender if the systems are trained on resume data that reflects the existing gender imbalance in a particular industry. 
- *Quality of service*: The models are trained primarily on English text and images with English text descriptions, and as such, performance is lower on content in other languages. 
- *Stereotyping*: These models can reinforce stereotypes. For example, when translating "He is a nurse" and "She is a doctor" into a genderless language such as Turkish, and then translating the Turkish back into English, many machine translation systems yield the stereotypical (and incorrect) results of "She is a nurse" and "He is a doctor." 

With this in mind, there are particular issues of fairness and responsibility to consider when using large language models:

- Avoid scenarios where use or misuse of the system could result in significant physical or psychological injury to an individual. For example, scenarios that diagnose patients or prescribe medications have the potential to cause significant harm.
- Avoid scenarios where use or misuse of the system could have a consequential impact on life opportunities or legal status. Examples include scenarios where the AI system could affect an individual's legal status, legal rights, or their access to credit, education, employment, healthcare, housing, insurance, social welfare benefits, services, opportunities, or the terms on which such access is provided.
- Carefully consider use cases in high-stakes domains or industries: examples include, but are not limited to, healthcare, medicine, finance, or issues of law.

In all of these scenarios, a level of human review by licensed professionals should be considered or required, depending on the facts and circumstances.