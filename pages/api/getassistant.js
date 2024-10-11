import OpenAI from 'openai';
const fs = require('fs');
import path from 'path';
export default function handler(req, res) {
    const openai = new OpenAI({apiKey:process.env.OPENAI_KEY});
    const message = async ()=>{
        try{
         
            const query = req.query.query;
            
            
        let assistant_id = process.env.ASSISTANT_ID;
        let info = `
Satchit Foundation Overview
Satchit Foundation is a non-profit organization established in 2019, dedicated to empowering marginalized communities in South West District, New Delhi. The foundation focuses on holistic development through education, skill training, and women's empowerment, aiming to improve living conditions and foster self-reliance among individuals. Archana Kumari serves as the Founder and President of the foundation.

Mission
The mission of Satchit Foundation is to empower marginalized communities through education and skill development, helping them achieve self-reliance and improve their quality of life.

Vision
The foundation envisions a society where individuals achieve self-reliance and dignity through education and empowerment.

Core Values
Satchit Foundation upholds values of compassion, service, empowerment, integrity, and inclusivity, guiding its efforts in social change.

Key Programs

Women’s Skill Training: The foundation trains women in skills such as dhoopvati and saamrani hawan cup making, bakery production, and sanitary napkin manufacturing, promoting financial independence.
Youth Empowerment: Satchit Yuva Club offers free admissions to sports academies, fostering leadership and nation-building skills among youth.
Children’s Education: The foundation provides free English, computer, and vocational training to children, equipping them with essential skills for a brighter future.
COVID-19 Support: During the pandemic, Satchit Foundation provided food and essential supplies to over 250 families, supporting community resilience.
Contact Details

Address: A-1/31, Madhu Vihar, Opposite to Dwarka Sector-5, New Delhi 110059
Mobile Numbers: +91-7827385171, +91-9893007145
Website: www.satchitfoundation.org

        `
         
        //   let thread = await openai.beta.threads.create();
        //   const message = await openai.beta.threads.messages.create(
        //     thread.id,
        //     {
        //     role: "user",
        //     content: query,
           
            
        //     }
        // );

        const completion = await openai.chat.completions.create({
          // assistant_id:assistant_id,
          model: 'gpt-4o', // Use the appropriate model
          // instructions:`You are a helpful assistant for a non-profit organization named Bargad Foundation and your name is WebSeva and you are created by Abhishek Kholiya. use the information provided to answer the questions. ${info} and only answer in maximum 2 lines`,
          messages: [
              { role: 'system', content: `You are a helpful assistant for a non-profit organization named Satchit Foundation and your name is WebSeva and you are created by Abhishek Kholiya. use the information provided to answer the questions. ${info} and only answer in maximum 2 lines` },
              { role: 'user', content:`${query}`  }
          ],
          max_tokens: 100,
          temperature: 0.7,
      });

          const responseText = completion.choices[0].message.content;

          res.status(200).json({ message: `
              
                  
              ${responseText}` });
      



    // const run = openai.beta.threads.runs.stream(thread.id, {
    //     assistant_id: assistant_id,
    //     instructions:`You are a helpful assistant for a non-profit organization named Bargad Foundation and your name is WebSeva and you are created by Abhishek Kholiya. use the information provided to answer the questions. ${info} and only answer in maximum 2 lines`,
    //    model: "gpt-4o",

    //   })
    //   res.setHeader('Content-Type', 'text/event-stream');
    //   res.setHeader('Cache-Control', 'no-cache');
    //   res.setHeader('Connection', 'keep-alive');

    //   run
    //     .on('textCreated', (text) => {
    //       res.write(`data: ${JSON.stringify({ type: 'textCreated', text })}\n\n`);
    //     })
    //     .on('textDelta', (textDelta) => {
    //       res.write(`data: ${JSON.stringify({ type: 'textDelta', textDelta })}\n\n`);
    //     })
    //     .on('toolCallCreated', (toolCall) => {
    //       res.write(`data: ${JSON.stringify({ type: 'toolCallCreated', toolCall })}\n\n`);
    //     })
    //     .on('toolCallDelta', (toolCallDelta) => {
    //       res.write(`data: ${JSON.stringify({ type: 'toolCallDelta', toolCallDelta })}\n\n`);
    //     })
    //     .on('end', () => {
    //       res.write('data: [DONE]\n\n');
    //       res.end();
    //     })
    //     .on('error', (error) => {
    //       console.error('Error:', error);
    //       res.write('data: [ERROR]\n\n');
    //       res.end();
    //     });
      
                
        }catch(error){
            console.error('Message Error',error);
            res.status(500).json({ error: 'An error occurred while processing your request.' });

        }
       
    }
    message();
  }
  