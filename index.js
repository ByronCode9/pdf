const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const createPdf = () => {

    const headlines = [
        ""
    ]
    const doc = new PDFDocument({ 
        size: 'A4',
        margins: { // Set margins to zero
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }});
    const writeStream = fs.createWriteStream('output.pdf');
    doc.pipe(writeStream);

    const numberOfPages = 21;

    for (let i = 1; i <= numberOfPages; i++) {
        if (i > 1) doc.addPage();

        const imagePath = path.join(__dirname, `images/p${i}.jpg`);
        if (fs.existsSync(imagePath)) {
            doc.image(imagePath, 0, 0, { width: doc.page.width, height: doc.page.height });
        } else {
            console.warn(`Image not found: p${i}.jpg`);
        }

        switch(i) {
            case 1: // CONTENTP1
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(48)
                    .fillColor('#3FC5FF')
                    .text("TOKEN X", doc.page.width/100, 200,{ 
                        align: 'center',
                        valign: 'center',
                        width: doc.page.width,
                        height: doc.page.height,

                });
                doc.font("fonts/Inter-Medium.ttf")
                    .fontSize(34)
                    .fillColor('white')
                    .text("AUDIT REPORT",doc.page.width/100,250,{
                        align: 'center',
                        valign: 'center',
                        width: doc.page.width,
                        height: doc.page.height,
                });

                // LINKS
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("@CERBERAI", 120, 799, {
                    link: 'https://cerberai.com',
                });

                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("@CERBER.AI", 253, 799, {
                    link: 'https://cerberai.com',
                });

                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("CERBER.ai", 386, 799, {
                    link: 'https://cerberai.com',
                });
            break;

            case 2: // CONTENTP2
                const text = `
                About CerberAI
                Scoring system
                Methodology
                Audit subject: TOKENX 
                Fees and Tax
                TOP Token Holders
                Token Security Overview
                Undetected Risks
                Refinement
                Governance
                AI Audit
                Conclusion
                `
                const pages = `
                03
                04
                05
                06
                07
                08
                09
                12
                15
                17
                18
                19
                `

                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Table of ", 85, 75, {
                });

                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("Contents", 230, 75, {
                });

                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(text, 100, 165, {
                        lineGap: 20,
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(pages, 390, 165, {
                        lineGap: 20,
                });
                break;

            case 3:
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("About ", 85, 75, {
                });

                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Cerber", 195, 75, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("AI", 314, 75, {
                });

                //CONTENT
                const content3 = `Founded in 1990, CerberAI Audit Solutions has grown from a small local firm into a renowned name in the global auditing landscape. Our journey began with a commitment to providing transparent, reliable, and comprehensive auditing services to businesses of all sizes. Over the decades, we’ve expanded our expertise and geographical reach, adapting to the evolving needs of the market and regulatory environments. Our purpose is to ensure financial integrity and foster trust through meticulous and unbiased auditing practices. 
                
                Today, CerberAI Audit Solutions stands as a testament to excellence, helping clients achieve compliance and drive sustainable growth.`
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(content3, 85, 160, {
                        align: 'justify',
                        width: 460,
                        lineGap: 10,
                });
            break;
            case 4:
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Scoring", 60, 60, {
                });

                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("System", 195, 60, {
                });

                //CONTENT

                const content4 = `
                 The score presented serves as a comprehensive evaluation of the contract’s safety, derived from meticulous analysis leveraging various API responses from reputable third-party sources. Our methodology entails an intricate assessment, considering not only the quantity but also the severity of identified issues. It is imperative to utilize this score as a guiding metric, complementing thorough due diligence efforts on behalf of users. Always conduct your own research (DYOR) to make informed decisions.
                `
                const content5 = `
                Our scoring algorithm employs a multifaceted approach, integrating key factors crucial in the evaluation of cryptocurrency tokens. Central to our analysis are considerations such as the token’s liquidity, market capitalization, transaction volume, and historical performance. Additionally, we scrutinize the token’s smart contract code for vulnerabilities and anomalies, drawing insights from API data reflecting community sentiment, regulatory compliance, and security protocols. Through this comprehensive assessment, we aim to furnish users with a nuanced understanding of the token’s viability and safety within the dynamic cryptocurrency landscape, empowering informed decision-making.
                `
            
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(10)
                    .fillColor('white')
                    .text(content4, 85, 152, {
                        align: 'justify',
                        width: 440,
                        lineGap: 5,
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(10)
                    .fillColor('white')
                    .text(content5, 85, 342, {
                        align: 'justify',
                        width: 440,
                        lineGap: 5,
                });
            break;
            case 5:
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Methodology", 60, 60, {
                });

                //CONTENT
                const p6c1 = `
                At Cereb.AI Audit Solutions, our methodology is designed to ensure thoroughness, accuracy, and compliance with the highest industry standards. We employ a systematic approach that involves detailed planning, execution, and reporting to provide our clients with clear and actionable insights. Our audit process is driven by cutting-edge technology and a team of experienced professionals dedicated to maintaining financial transparency. 
                `
                const p6c2 = `
                Key components of our methodology include:
                `

                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(p6c1, 60, 110, {
                        align: 'justify',
                        width: 485,
                        lineGap: 3,
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(p6c2, 13, 235, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(15)
                    .fillColor('#00acf8')
                    .text("Risk Assessment:", 110, 305, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("Identifying and evaluating potential risks to focus audit efforts effectively.", 110, 323, {
                        width: 150,
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(15)
                    .fillColor('#00acf8')
                    .text("Substantive Testing:", 370, 305, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("Conducting detailed testing of financial transactions and balances.", 370, 323, {
                        width: 170,
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(15)
                    .fillColor('#00acf8')
                    .text("Internal Controls Review:", 110, 395, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("Examining and testing the effectiveness of a client’s internal controls.", 110, 413, {
                        width: 150,
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(15)
                    .fillColor('#00acf8')
                    .text("Reporting:", 370, 395, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("Delivering comprehensive reports with findings, recommendations, and an executive summary.", 370, 413, {
                        width: 170,
                });
            break;

            case 6:
                // CONTENTP6
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Audit Subject:", 60, 60, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("TOKEN X", 300, 60, {
                });

                //CONTENT
                doc.font("fonts/Inter-Medium.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("TOKEN X", 240, 142, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("TOKENX is a token that allows people to invest in Tokenx team’s hard work towards better future of decentralized systems throughout ERC-20 ETH network.", 
                        240, 190, {
                            width: 325,
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("TKX", 240, 280, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("0x046EeE2cc3188071C02BfC1745A6b17c656e3f3d", 240, 331, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("ERC-20", 240, 382, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("18", 240, 437, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("188,168,176", 240, 492, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("188,168,176.01", 240, 544, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("0.15897", 240, 596, {
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("23,487", 240, 648, {
                });
            break;

            case 7:
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Fees and ", 60, 60, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("Tax", 220, 60, {
                });

                //CONTENT
                const p7c1 = "In some smart contracts, the owner or creator of the contract can set fees for certain actions or operations within the contract. These fees can be used to cover the cost of running the contract, such as paying for gas fees or compensating the contract’s owner for their time and effort in developing and maintaining the contract."
                const p7c2 ="Token liquidity refers to the ease of buying and selling a cryptocurrency token in the market without significantly impacting its price. Liquidity locks are mechanisms implemented within smart contracts to enhance liquidity by locking a portion of tokens or funds for a specified period, thereby reducing circulating supply and potentially increasing scarcity. These locks demonstrate a commitment from project developers to uphold market stability and protect investor interests by preventing large sell-offs that could adversely affect liquidity and token value, ultimately fostering a healthy trading environment conducive to sustained growth."
                
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(p7c1, 60, 130, {
                        align: 'justify',
                        width: 485,
                        lineGap: 3,
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(p7c2, 60, 390, {
                        align: 'justify',
                        width: 485,
                        lineGap: 3,
                });
                // CONTENTP7
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(16)
                    .fillColor('#005378')
                    .text("Buy: 5%", 100, 287, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(16)
                    .fillColor('#00acf8')
                    .text("Sell: 5%", 100, 330, {
                });
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(32)
                    .fillColor('white')
                    .text("5%", 230, 250, {
                });
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(32)
                    .fillColor('white')
                    .text("5%", 316, 250, {
                });

                // CONTENTP7 - TABLE DATA
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(11)
                    .fillColor('white')
                    .text("0xfa...debd", 75, 628, {
                });
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(11)
                    .fillColor('white')
                    .text("WETH+TKX", 155, 628, {
                });
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(11)
                    .fillColor('white')
                    .text("UNISWAP V2", 233, 628, {
                });
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(11)
                    .fillColor('white')
                    .text("2,364", 330, 628, {
                });
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(11)
                    .fillColor('white')
                    .text("$0.18975", 398, 628, {
                });
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(11)
                    .fillColor('white')
                    .text("$38K", 475, 628, {
                });
            break;
            case 8:
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Top Token", 60, 60, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("Holders", 243, 60, {
                });

                // CONTENTP8
                let addresses = [
                    {
                      address: "0xf...dedb",
                      holdings: "27.26M",
                      percentage: "27.26%"
                    },
                    {
                      address: "0x3...a1b1",
                      holdings: "5.33M",
                      percentage: "5.33%"
                    },
                    {
                      address: "0xd...5caf",
                      holdings: "5.00M",
                      percentage: "5.00%"
                    },
                    {
                      address: "0x5...34c0",
                      holdings: "3.44M",
                      percentage: "3.44%"
                    },
                    {
                      address: "0x6...f7d3",
                      holdings: "2.24M",
                      percentage: "2.24%"
                    },
                    {
                      address: "0xe...c1e3",
                      holdings: "1.35M",
                      percentage: "1.35%"
                    },
                    {
                      address: "0xe...1a07",
                      holdings: "1.31M",
                      percentage: "1.31%"
                    },
                    {
                      address: "0x0...ade0",
                      holdings: "1.12M",
                      percentage: "1.12%"
                    },
                    {
                      address: "0xb...8ee1",
                      holdings: "1.09M",
                      percentage: "1.09%"
                    },
                    {
                      address: "0x9...fb5f",
                      holdings: "1.04M",
                      percentage: "1.04%"
                    }
                  ]
                let p8c1 = `The top 100 holders collectively own 80.54% (80540000 Tokens) of TOKENX.`

                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(p8c1, 87, 195, {
                        width: 200,
                        lineGap: 3,
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(18)
                    .fillColor('#3FC5FF')
                    .text("80.54%", 392, 195, {
                });

                //FILL TABLE DATA - DYNAMIC 
                let startY = 260;
                addresses.forEach(x =>{
                    doc.font("fonts/Inter-SemiBold.ttf")
                        .fontSize(14)
                        .fillColor('#a09fa5')
                        .text(x.address, 320, startY, {
                    });
                    startY = startY+25
                })
                startY = 260;
                addresses.forEach(x =>{
                    doc.font("fonts/Inter-SemiBold.ttf")
                        .fontSize(14)
                        .fillColor('white')
                        .text(x.holdings, 410, startY, {
                    });
                    startY = startY+25
                })
                startY = 260;
                addresses.forEach(x =>{
                    doc.font("fonts/Inter-SemiBold.ttf")
                        .fontSize(14)
                        .fillColor('#3FC5FF')
                        .text(x.percentage, 480, startY, {
                    });
                    startY = startY+25
                })

                //Distribution
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('#3FC5FF')
                    .text("80.54%", 210, 377, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('#077da8')
                    .text("19.56%", 210, 399, {
                });

                //Holders
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('#3FC5FF')
                    .text("100,000,000", 210, 516, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('#3FC5FF')
                    .text("32,167", 210, 538, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("0%", 210, 561, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("0%", 210, 583, {
                });
            break;
            case 9:
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Token Security", 60, 60, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("Overview", 320, 60, {
                });

                // CONTENTP9
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("Contract source code is verified", 80, 140, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 190, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 140, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no proxy in the contract. The proxy contract means contract owner can modify the function of the token and possibly affect the price.", 
                        320, 190, {
                        width: 190
                });
                doc.font("fonts/Inter-Bold.ttf")
                .fontSize(16)
                .fillColor('white')
                .text("Contract source code is verified", 80, 350, {
                    width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 400, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 350, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no proxy in the contract. The proxy contract means contract owner can modify the function of the token and possibly affect the price.", 
                        320, 400, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                .fontSize(16)
                .fillColor('white')
                .text("Contract source code is verified", 80, 560, {
                    width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 610, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 560, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no proxy in the contract. The proxy contract means contract owner can modify the function of the token and possibly affect the price.", 
                        320, 610, {
                        width: 190
                });
            break;
            case 10:
                    //HEADING
                    doc.font("fonts/Inter-Light.ttf")
                    .fontSize(36)
                    .fillColor('white')
                    .text("Token Security", 60, 60, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("Overview", 320, 60, {
                });

                // CONTENTP10
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("Contract source code is verified", 80, 140, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 190, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 140, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no proxy in the contract. The proxy contract means contract owner can modify the function of the token and possibly affect the price.", 
                        320, 190, {
                        width: 190
                });
                doc.font("fonts/Inter-Bold.ttf")
                .fontSize(16)
                .fillColor('white')
                .text("Contract source code is verified", 80, 350, {
                    width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 400, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 350, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no proxy in the contract. The proxy contract means contract owner can modify the function of the token and possibly affect the price.", 
                        320, 400, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                .fontSize(16)
                .fillColor('white')
                .text("Contract source code is verified", 80, 560, {
                    width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 610, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 560, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no proxy in the contract. The proxy contract means contract owner can modify the function of the token and possibly affect the price.", 
                        320, 610, {
                        width: 190
                });

            break;
            case 11:
                //HEADING
                doc.font("fonts/Inter-Light.ttf")
                .fontSize(36)
                .fillColor('white')
                .text("Token Security", 60, 60, {
                });
                doc.font("fonts/Inter-SemiBold.ttf")
                    .fontSize(36)
                    .fillColor('#3FC5FF')
                    .text("Overview", 320, 60, {
                });

                // CONTENTP11
                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("Contract source code is verified", 80, 150, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This ts are lifraud their users of their assets.", 
                        80, 200, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 150, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no pron and possibly affect the price.", 
                        320, 200, {
                        width: 190
                });
                doc.font("fonts/Inter-Bold.ttf")
                .fontSize(16)
                .fillColor('white')
                .text("Contract source code is verified", 80, 335, {
                    width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("This token contracn contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 385, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 335, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no nction of the token and possibly affect the price.", 
                        320, 385, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                .fontSize(16)
                .fillColor('white')
                .text("Contract source code is verified", 80, 515, {
                    width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("rced token contracts are likely to have malicious functions to defraud their users of their assets.", 
                        80, 565, {
                        width: 190
                });

                doc.font("fonts/Inter-Bold.ttf")
                    .fontSize(16)
                    .fillColor('white')
                    .text("No proxy", 320, 515, {
                        width: 180
                });
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text("There is no en and possibly affect the price.", 
                        320, 565, {
                        width: 190
                });
            break;
            case 21:
                //CONTENT
                const outro = `
CerberAI is a leading provider of automated smart contract due diligence services, ensuring the integrity and legitimacy of cryptocurrency tokens. Our platform is meticulously designed to offer comprehensive scrutiny. However, the dynamic nature of the market may lead to unforeseen bugs or vulnerabilities affecting token values.

We do not hold specific obligations regarding individual trading outcomes or the utilization of audit content. Users are encouraged to exercise their own discretion and judgment in their trading activities. By accessing and utilizing our auditing tool, users agree to release CerberAI from any liability, responsibility, or claim arising from the acquisition or interpretation of audit content generated through our platform.

CerberAI remains committed to providing a reliable and sophisticated auditing solution, empowering users with the insights necessary to navigate the cryptocurrency landscape with confidence. However, users should understand that the utilization of our platform entails inherent risks, and they should conduct their own thorough assessments before making any trading decisions.
`
                doc.font("fonts/Inter-Light.ttf")
                    .fontSize(12)
                    .fillColor('white')
                    .text(outro, 65, 140, {
                        width: 480,
                        align: 'justify'
                });
        }

        if(i != 1){
            // LINKS
            doc.font("fonts/Inter-Light.ttf")
                   .fontSize(8)
                   .fillColor('white')
                   .text("@CERBERAI", 83, 802, {
                        link: 'https://cerberai.com',
            });
    
            doc.font("fonts/Inter-Light.ttf")
                .fontSize(8)
                .fillColor('white')
                .text("@CERBER.AI", 181, 802, {
                    link: 'https://cerberai.com',
    
            });
            doc.font("fonts/Inter-Light.ttf")
                .fontSize(8)
                .fillColor('white')
                .text("CERBER.ai", 278, 802, {
                    link: 'https://cerberai.com',
            });
        }
    }

    doc.end();
    console.log("PDF outputted");
};

createPdf();
