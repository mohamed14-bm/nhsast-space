import React from 'react';
import { CycleId, CycleData } from '../types';

export const SCHOOL_INTRO = "Autonomous systems represent the pinnacle of modern engineering—machines capable of sensing, thinking, and acting without direct human intervention. From self-driving cars to interplanetary rovers, this field is reshaping our world. NHSAST is committed to training the elite engineers who will drive this revolution. Our curriculum is rigorously designed to bridge the gap between abstract mathematical theory and real-world application, fostering a deep understanding of the complex interplay between hardware, software, and physical dynamics.";

export const DRIVE_ROOT_URL = "https://drive.google.com/drive/folders/1tClaiMRU4ZChMmY6gBYrjSMeZbAfclcD?usp=sharing";

// Data Definition based on NHSAST Program PDF & Standard CP
export const studyData: Record<CycleId, CycleData> = {
  prep: {
    id: 'prep',
    label: 'Preparatory Cycle',
    description: 'Foundational sciences and engineering basics (CP1 & CP2)',
    advice: [
      `Louay, a first year student words:

نعطيكم مثال عن تجربتي

الاخطاء لي درتهم وضيعولي فرص : 

-أول وأسوأ خطأ هو انو كنت نصور الطابلوات تاع ليكور، في بلاصة ماندي نقاط مهمة ونكتبها، لانو بيناتنا، اغلبية الاساتذة يبعتو لي كور ، وكي نصور 365 تصويرة تاع طابلو باينة ماراحش نقرا حتى وحدة 
بصح كون نكتب النقاط، كيما درت فالتاريخ، نلقا روحي كتبت اهم عفايس فالدرس، ونلقا روحي نقدر نسترجع كامل المعلومات

-ثاني خطأ درتو، هو اني، كي مانفهمش عفسة ، نخليها ومانحوسش نفهم وشنهيا، مثال ليكور تاع كشيدي ، راني حاس بلي كون كي نولي لعشيا للشومبرة، رحت قريت الكور ديالو وسييت نفهمو (ولا نقرا النقاط لي كتبتهم مسبقا) راح نستوعب وش دار

- ثالث خطأ هو ليلة الرعد : خاوتي ماللخر ليلة الرعد عندها فايدة، بصح مشي ليلة الرعد لي اغلبيتنا دارها : تاع موديل ماحاكمين فيه والو نقراوه كومبلي في ليلة، هادي تصلح غير في اونجلي 

-رابع خطأ، عندو علاقة بالتيبيات، كيما تعرفو حنا كي نديرو لاب فيزيك، نسييو ڨاع وش نقدرو باش نكملوه نليكيديوه ونروحو، بصح كون دينا وقتنا، وسيينا فهمناه قبلو وبعدو، واعطينالو حقو، كون ماخلاصتش فينا سمانة نقراو علاجال تاست تيبي 


واحد مالاخطاء لي كامل درناه هو تراكم الدروس، خليناهم حتى العطلة تاع الاختبارات ، شخصيا كون جيت نسيي نفهم وش دارو لي بروف فليكور قبل مانرقد، بالاك نقصت عليا بزاف خدمة

ثاني نصيحة ، كي نحلو سيري تيدي فالكلاصة، عاودو ديروها ، معليش مش ڨاع التمارين، فالويكاند ولا، عاودو سييو حلو من راسكم، بلا شات جيبيتي بلا الحل، وركزو مع البروف كي تحل تيدي ، لانو الطريقة تاع التفكير ديالها راح تقعد في راسكم حتى وماحسيتوش


وسييو رجعو القراية طريقة عيش، مش عفسة تديرونجي ولازملها وقت، شغل سييو والفوها تديروها كيما تاكلو تشربو تريحو …

الخطة لي راني حاب نديرها في s2 ? 
شوفو باش نقوللكم راح نطبقها سواسوا راني نكذب، مي راح نعطيلكم الخطة لي تبانلي optimal، مع العلم ماراحش نطبقها هي ، هادي في حالة تاع طالب مثالي، يقدر الواحد يسيي يدير كيما هو :


اولا يحضر ليكور، مالڨري مايفهمش ، بصح يحضر ويسيي يدي نقاط مهمة وعفايس لي تقولهم الشيخة يكتبهم (مش لي تقراهم ، تقولهم)

ثانيا، كي يكمل النهار، يعاود يقرا الكور او النقاط لي كتبهم ، يسيي يفهم، اذا مافهمش، يخير اكثر كور مافهموش هاداك النهار، ومايرقدش حتى يفهمو،

ثالثا، كي يكمل هادو ويبقالو وقت، يسيي يحل تمارين تاع لاسيري لي حلهم البروف الصباح، اوووو اذا ماكانش وقت، يقرا الحل بصح يسيي يفهمو مليح

فالويكاند : يوجد للتيبي تاع سمانة الجاية، مهما كان، يسيي يحل لي سيري تاع سمانة الجاية (تمرين ولا زوج من كل سيري)

وقت الفراغ : يريح باينة هادي، مي اذا كان وقت فراغو كبير، يسيي يوجد للكور الجاي

هادا مخطط ماشكيتش يقدر واحد يطبقه كيما راه، لانو صعيييب، بصح اي واحد فيها يبدل فيه على حساب ظروفو، وقادر يعاونو`,
      `Hiba, a first year student:

السلام عليكم ورحمة الله و بركاته 
بالنسبة لاخطائي في ال s1 
اولا كيما قال لؤي التصواااار كنت حرفيا نصور في الكور والتيدي ومنعاودش نشوف هاذوك ليفوطو (انصح نفسي واياكم وليو تكتبو اهم الافكار لي قالهم لبروف ومام اكتبو الكور راح يسهل عليكم بزاف من بعد متحتاجوش ملخص غير كور لبروف وتسييو تفهموه برك) 
ثاني غلطة درتها انو كنت كي منفهمش نسكت حرفيا هاذي غلطة عمري 
كان لازم كي منفهمش نحبس لبروف ونقلو عاودلي ومفهمتش وكي منفهمش كلمة نحبسو ونقلو وش معناها (كنت نخدع روحي ولي منفهمهاش نقول خلي هاذي من بعد نبحث عليها ونفهمها في اللخر لقيت روحي راكمت بزااااااف دروس ومعلومات مكنتش نفهمهم وملقيتش اصلا منين نفهمهم) 
ثالثا مكانش لازم نسكت للجماعة لي كانت تشوش عليا في اللونفي (منا وجاي لي تقعد تنعت في روحها شوفوني فاهمة للبروف نقميها لانو في النهاية تحشاتلنا غير حنا وهوما شوشو علينا وفوقها كانو فاهمين اصلا(الذراري مام نتوما قومو ببعضاكم كي واحد يديرونجينا اهدرو معاه) )
رابع غلطة وهي كي كنت نقول نطلع للاشونبر نقرا خير ومنبعد نعطيها برقدة ومنقراش (لي يبغي يقرا فلاشونبر ويشوف روحو ممكن يرقد من الاحسن يعيط لكاش واحد ويقعدو في زوج يقراو هك مترقدوش )
كنت نقول بعد 10 كي نخلص من ليكول نطلع نرقد وفي اللخر نقعد نشايخ مع لبنات ونقصر وهك صباح منقدرش نوض بكري واذا نضت نقعد غير نثاوب في اللونفي (سييو تنظمو رقادكم واخطيكم من السهرات)
اخطبكم من الناس المتشاءمة و لي تضال تشكي باسكو والله ياثرو عليكم سلبا وغير يحيبو طاقة سلبية 
مام نتوما كي تكونو كارهين وباغية تشكو في بلاصة متجو تقولو مانيش نفهم هذاك الموديل ... اطلب نصيحة احسن وقول معليش تنصحوني كيفاه نفهم الموديل في بلاصة متولي جلسة شكاوي نحولوها لجلسة نصائح 🤍
خاوتي مهما يصرا معاكم وتكونو كارهين صليو زوج ركعات تستراحو بيهم واشكيو لربي لانو حرفيا الشكوى لغير الله مذلة 
و تمسكو بدينكم واخلاقكم هنا راهو جاي رمضان وهي فرصة عظييمة للتقرب لله متخليوش لقرايا والامتحانات الدنيوية تبعدكم على ربي ...
في الs2 خاوتي سييو تطلعو التيدي والتيبي مليح فاذا كتب ربي ومخدمتوش في الاختبار تقدر تكلع معدلك كيما صرا مع زايير

نصيحة ليا وليكم 
في ال s2 سورتو فيزيا واناليز والجابر اقراو الكور قبل متدخلو هذا يخليكم تفهمو مليييح في الكور على لبروف متجيوش تيتكشفو الكور مع ليبروف نتاوعنا هاذو يليق تجي تراجع معاهم 
ليسيري سييو تحلوهم قبل التيدي منها في التيدي تثحو لرواحكم وتفهمو خييير ومنها تربحو نقطة التيدي لانو تولو تشاركو سورتو عند كاديك ورزيق..
التيبيات متهملوهمش 
راهي ساهلة بعد كل تيبي مع تخلصو روحو لخصوه واكتبو اهم المعلومات وسقسيو زملاءكم اذا نسيتو كاش عفسة 
هك في اللهر تلقاو رواحكم لخصتو كامل التيبيات وحدكم وحرفيا اذا درتو ملخصكم وحدكم وبيديكم في اللخر راح تقراوه فقط تتفكرو كلش`,
      `PHN, a first year student:

🌸السلام عليكم ورحمة الله وبركاته🌸
  بعد ماجاز السداسي الأول كاين بزااف أمور تعلمتها من هذه الفترة على جميع المستويات منها الجانب الأكاديمي وهذه هي أهم النقاط:
1🔹 الله سبحانه وتعالى هو اللي يسر الأمور والظروف لكل واحد فينا باش يجي ويقرا في هذا التخصص اذن ربي شاف في هذا التخصص الخير وشاف بلى كل واحد فينا يقدر لهذا التخصص بالرغم من الصعوبات اللي فيه
2🔸 التوكل يكون على ربي ولا احد سواه احيانا تخدم مليح وتقول راني ضامنها وتلقا روحك ماديتش مليح ومنين ذاك ماخدمتش و علابالك بلى ماخدمتش وتلقا روحك ديت مليح فهذا كله توفيق من عند ربي سبحانه فلنحسن الظن بالله
3🔹 الواحد يحاول يخلي دائما علاقتو بربي مليحة ويحافظ على وردو وصلاتو لانه دايما التوفيق من عند ربي
🔻(في النقاط السابقة ركزت على علاقة العبد بربه لأنها جد مهمة واول حاجة يلزم نحرصو عليها قبل مانجو نهدرو على اي حاجة)
4🔸 يلزم الواحد يدير في بالو بلى دايمن كاين لي خير منو وكاين لي أسوأ منو هكا باش يرتاح نفسيا (خاطر صح حقيقة )
  5🔹 الكور حاجة مهمة بلبزاف حتى لو كان الواحد مايفهمش على الاستاذ خاطر على الاقل يدي اهم النقاط اللي ركز عليها الاستاذ لانو الاستغناء على واش قدم الاستاذ وتحوس وحدك في الانترنت يخليك توه واحيانا الاستاذ يركز غير حاجة ولا زوج في الكور والباقي لالا
  6🔸 التأجيل أكبر مشكل يواجه كل واحد فينا في مرة نصحني استاذ وبروفيسور في الجامعة انو كامل واش يندار في الكور يتعاود وقالي بلى قريتو ساعة ونص هذيك المادة معنتها في الدار تعاود تراجع هذيك المادة لمدة ساعة ونص على الاقل
7🔹 كي تحضر الكور راح تلقا ناس تحب تبين روحها بقصد وبغير قصد وراح تحسسك في قرارة نفسك بلي مزالك بعيد ونتا غبي والناس راها تفهم عادي في الحقيقة حتى هوما مراهومش فاهمين سواسوة ولا راهم حضروا الدرس من قبل  واللي هي صراحة حاجة مليحة لو كان الواحد يديرها 
8🔸ركز على نفسك وفقط ومايهمكش حال البقية ولو طلعوا للقمر ولا ماتحركوش ولا خطوة نتا عندك هدف ويلزم تلحقلو بإذن المولى
9🔸 مشي عيب انك تسقسي زملائك على اي عفسة بشرط انك ماتعيقهمش وماتعرقلهمش على مخططاتهم وتكون اناني وثان كي يجي يسقسي كاش واحد على حاجة حاول انك ماتبخلش عليه باي حاجة

10🔸حاول سلسلة تاع td حلها في وقتها كيما كشيدي مقسم على سيري على حساب الأسابيع فمليح نستفيدو من هذا الشي باش يقعد الوقت باش الواحد يحل من جهة أخرى وحاول في كل محور دير الملخص نتاعك les astuces لي لقيتهم واكتشفتهم في التمارين نتاوعو
11🔹 تنظيم الوقت هو السر النجاح بحيث كل حاجة عندها بلاصتها
12🔸 حاول انك ما تكرسش كل وقتك للدارسة وتحرم نفسك في سبيلها خلي وقت باش دير هواياتك وطور نفسك واخرج من منطقة الراحة نتاعك
13🔹 الامتحانات النصفية جد مهمة وكي تخدم فيها رح تعاونك من بعد
14🔸بالنسبة للحصة الأعمال التطبيقية هذه هي أهم النقاط:
▫️ حاول انك تكتب مع الاستاذ كي يكون يشرح(لي قدر يصور يصور السبورة يصورها) لخص كل tp بعد نهاية الحصة وتقدر تلخصو مع البينوم يعني جماعي  ▫️مليح لو كان تصور report تاعك 
▫️وحتى لو كان الاستاذ دار التجربة سقسيه يخليك تسيي وتجرب خاطر في الامتحان نتا لي راح دير
▫️ كي تكون مع البينوم لا كنتم مقسمين الأدوار تاع tp حاولوا تبدلوا وجرب دير الحاجة لي ماتعرفهاش
 15🔹بالنسبة للمواد حاول دايمن تحل أصعب عفسة و توقع من الأساتذة الأسوأ

 16🔸دائما والواحد يسقسي كي مايفهمش مشي يقول نروح للدار ونحوس عليها خاطر قادر تضرب نهار كامل ونتا يحوس عليها وهي قادر الاستاذ يواجبك في أقل من دقيقة ويفهمهالك

17🔹بعد على الناس المتشائمة اللي تشكي دايمن ونتا حاول ثان ماتشكيش للاخرين وسقسيهم باش ينصحوك ونتا ثان تنصح بالشي لي تعرفو
18🔸قبل ماتبدا تقرا حوس على جميع المصادر اللي تناسبك باش ماضيعش الوقت ونتا حوس عليها من بعد

   وهذه هي أهم الأمور اللي تعلمتها وحبيت نقول لنفسي وليكم حاجة دوكا جازت أصعب فترة علينا لي هي S1 لانو كلش كان جديد وقدرنا نتجاوزو ونصمدو فيها بالرغم من عدة تحديات( أهمها تغير  المحيط والابتعاد عن الاهل وتمرميد الإقامة...) فبإذن الله نقدرو نتجاوزو اللي جاي ونعوضوا في السداسي الثاني ونداركوا أخطاءنا
-وفقنا الله وإياكم إلى مايحب ويرضاه-`
    ],
    semesters: [
      {
        id: 's1',
        title: 'Semester 1 (CP1)',
        modules: [
          {
            id: 'math1', name: 'Analysis 1', code: 'MATH1', coeff: 5, credits: 5,
            objectives: 'Real numbers, sequences, limits, continuity, differentiability, and expansion formulations.',
            resources: {
              courses: [
                { title: 'Chapter 1: Real Numbers', link: '/cours/analysis/chapter 1 real number.pdf' },
                { title: 'Chapter 2: Sequences', link: '/cours/analysis/chapter 2 sequnces.pdf' },
                { title: 'Chapter 3: Functions', link: '/cours/analysis/chapter 3 functoins.pdf' },
                { title: 'Chapter 4: Elementary Functions', link: '/cours/analysis/chapter 4 elementry Fonctions.pdf' },
              ],
              tds: [
                { title: 'Set 1: Real Numbers', link: '/td/analysis/série 1 poly.pdf' },
                { title: 'Set 2: Sequences', link: '/td/analysis/series 2 sequnces.pdf' },
                { title: 'Set 3: Functions', link: '/td/analysis/Serie 3 2025.pdf' },
                { title: 'Set 4: Elementary Functions', link: '/td/analysis/Série Elementary functions.pdf' },
              ]
            }
          },
          {
            id: 'alg1', name: 'Algebra 1', code: 'MATH2', coeff: 4, credits: 4,
            objectives: 'Logic, sets, maps, algebraic structures (groups, rings, fields), polynomials, and rational fractions.',
            resources: {
              courses: [
                { title: 'Chapter 1: Logic', link: '/cours/algebra/chapter 1 logic.pdf' },
                { title: 'Chapter 2: Sets and Maps', link: '/cours/algebra/chapter  2 Sets and maps.pdf' },
                { title: 'Chapter 3: Binary Operations', link: '/cours/algebra/chapter  3 binary relations.pdf' },
                { title: 'Chapter 4: Algebraic Structures', link: '/cours/algebra/chapter 4 Algebraic stucture.pdf' },
                { title: 'Chapter 5: Polynomes', link: '/cours/algebra/chapter 5 polynomes.pdf' },
              ],
              tds: [
                { title: 'Set 1: Logic', link: '/td/algebra/serie1-Logique (2) poly.pdf' },
                { title: 'Set 2: Sets and Maps', link: '/td/algebra/serie2-Applications (1) poly.pdf' },
                { title: 'Set 3: Binary Operations', link: '/td/algebra/003.pdf' },
                { title: 'Set 4: Algebraic Structures', link: '/td/algebra/004.pdf' },
                { title: 'Set 5: Polynomes', link: '/td/algebra/Poly-33.pdf' },
              ]
            }
          },
          {
            id: 'stat1', name: 'Probability and Statistics', code: 'STAT1', coeff: 4, credits: 4,
            objectives: 'Descriptive statistics, probability spaces, conditional probability, and random variables.',
            resources: {
              courses: [
                { title: 'Chapter 1: Statistical series with one variable', link: '/cours/stats/chapter 1 statistics with one character.pdf' },
                { title: 'Chapter 2: Statistical series with two variables', link: '/cours/stats/chapter 2 Statistical series with two characters.pdf' },
                { title: 'Chapter 3: Combinatorics & Probability', link: '/cours/stats/chapter 3 Combinatorics Probability.pdf' },
              ],
              tds: [
                { title: 'Set 1: Statistical series with one variable', link: '/td/stats/set 2.pdf' },
                { title: 'Set 2: Statistical series with two variables', link: '/td/stats/set 2.pdf' },
                { title: 'Set 3: Combinatorics & Probability', link: '/td/stats/Problems_sheet_N03.pdf' },
              ]
            }
          },
          {
            id: 'phys1', name: 'Physics 1 (Mechanics)', code: 'PHYS1', coeff: 5, credits: 5,
            objectives: 'Kinematics, dynamics of point masses, work, energy, and momentum conservation laws.',
            resources: {
              courses: [
                { title: 'Chapter 2: Kinetics', link: '/cours/physic/chapter 2 knitics.pdf' },
                { title: 'Chapter 3: Kinematics of a Particle', link: '/cours/physic/chapter 3 Kinematics of a Particle.pdf' },
                { title: 'Chapter 4: Work and Energy', link: '/cours/physic/chapter 4 work and enrgy.pdf' },
                { title: 'Chapter 5: Collisions', link: '/cours/physic/Chapter 5 Collisions.pdf' },
              ],
              tds: [
                { title: 'Set 1: Mechanics', link: '/td/physic/Doc Dec 14 2025 19.51.pdf' },
                { title: 'Set 2: Kinetics', link: '/td/physic/physics_correction.pdf' },
                { title: 'Set 3: Kinematics of a Particle', link: '/td/physic/Test1.pdf' },
                { title: 'Set 4: Work and Energy', link: '/td/physic/physics_correction work.pdf' },
              ]
            }
          },
          {
            id: 'chem1', name: 'Chemistry 1', code: 'CHEM1', coeff: 4, credits: 4,
            objectives: 'Structure of matter, atomistic theory, periodic table, chemical bonding, and molecular structure.',
            resources: {
              courses: [
                { title: 'Chapter 1', link: '/cours/chemistry/chapter 1 FUNDAMENTAL CONCEPTS.pdf' },
                { title: 'Chapter 2', link: '/cours/chemistry/chapter 2.pdf' },
                { title: 'Chapter 4', link: '/cours/chemistry/chapter 4 Introduction to Quantum Mechanics – The Schrödinger Equation.pdf' },
                { title: 'Chapter 5', link: '/cours/chemistry/chapter 5 ELECTRONIC CONFIGURATIONS AND PERIODIC PROPERTIES OF ELEMENTS.pdf' },
                { title: 'Chapter 6', link: '/cours/chemistry/chapter 6 Chemical bonding and the structure of molecules.pdf' },
              ],
              tds: [
                { title: 'Set 1', link: '/td/chemistry/001.pdf' },
                { title: 'Set 2', link: '/td/chemistry/002.pdf' },
                { title: 'Set 3', link: '/td/chemistry/003.pdf' },
                { title: 'Set 4', link: '/td/chemistry/SET 4.pdf' },
                { title: 'Set 5', link: '/td/chemistry/SET 5.jpg' },
                { title: 'Set 6', link: '/td/chemistry/SET 6 (1).pdf' },
              ]
            }
          },
          {
            id: 'info1', name: 'Introduction to Programming', code: 'INFO1', coeff: 4, credits: 4,
            objectives: 'Introduction to algorithmic thinking, variables, loops, arrays, and basic programming logic.',
            resources: {
              courses: [
                { title: 'Chapter 1: Introduction', link: '/cours/cs/chapter 01.pdf' },
                { title: 'Chapter 2: Algorithms', link: '/cours/cs/chapter 02.pdf' },
                { title: 'Chapter 3: Languages', link: '/cours/cs/chapter 03.pdf' },
                { title: 'Chapter 4: Variables', link: '/cours/cs/chapter 04.pdf' },
                { title: 'Chapter 5: Instructions', link: '/cours/cs/chapter 05.pdf' },
                { title: 'Chapter 6: Structure', link: '/cours/cs/chapter 06.pdf' },
                { title: 'Chapter 7: Arrays', link: '/cours/cs/chapter 07.pdf' },
                { title: 'Chapter 8: Functions', link: '/cours/cs/Chapter 08.pdf' },
                { title: 'Chapter 9: Pointers', link: '/cours/cs/chapter 9+10.pdf' },
                { title: 'Chapter 10: Structs', link: '/cours/cs/chapter 9+10.pdf' },
                { title: 'Chapter 11: Files', link: '/cours/cs/Chapter 11.pdf' },
                { title: 'Chapter 12: Dynamic Memory', link: '/cours/cs/chapter 12.pdf' },
              ],
              tds: [
                { title: 'Set 1', link: '/td/cs/PW-1 Basic actions.pdf' },
                { title: 'Set 2', link: '/td/cs/PW-2 Conditional statements.pdf' },
                { title: 'Set 3', link: '/td/cs/DW-3 Conditional statements.pdf' },
                { title: 'Set 4', link: '/td/cs/DW-4 Iterative structures.pdf' },
                { title: 'Midterm Exam', link: '/td/cs/MidTerm S1 11-12-2024F.pdf' },
                { title: 'Practical Test', link: '/td/cs/Pratical test S1-2024-2025F.pdf' },
              ]
            }
          },
          {
            id: 'tech1', name: 'Technical Drawing', code: 'TECH1', coeff: 1, credits: 1,
            objectives: 'Fundamentals of technical drawing, projections, and standard engineering representations.',
            resources: {
              courses: [
                { title: 'Chapter 1: Intro to Tech Drawing', link: '/cours/tech drawig/chapitre I_Cours de dessin Technique (1) (1).pdf' },
                { title: 'Chapter 2: Geometric Constructions', link: '/cours/tech drawig/Chapter 2   Geometric Constructions.pdf' },
                { title: 'Chapter 3: Projection of Solids', link: '/cours/tech drawig/chapitre III-PROJECTION OF  SOLIDS  2025.pdf' },
                { title: 'Chapter 4: Perspectives', link: '/cours/tech drawig/Chapter IV  The perspectives.pdf' },
                { title: 'Chapter 5: Cuts and Sections', link: '/cours/tech drawig/Chaptre V   Cuts and Sections pps.pdf' },
              ],
              tds: [
                { title: 'Set 2: Geometric Constructions', link: '/td/tech drawig/Exercises  Geometric construction  serie 2 .pdf' },
                { title: 'Set 3: Projection of Solids', link: '/td/tech drawig/projection of solids.pdf' },
              ]
            }
          },
          {
            id: 'foss', name: 'Free and Open-Source Software', code: 'FOSS', coeff: 1, credits: 1,
            objectives: 'Introduction to FOSS philosophy, licensing, and usage of open-source tools in engineering.',
            resources: {
              courses: [
                { title: 'History of FOSS', link: DRIVE_ROOT_URL },
                { title: 'Open Source Licenses', link: DRIVE_ROOT_URL },
                { title: 'Git & Collaboration', link: DRIVE_ROOT_URL },
              ],
              tds: [
                { title: 'Set 1: History of FOSS', link: DRIVE_ROOT_URL },
                { title: 'Set 2: Open Source Licenses', link: DRIVE_ROOT_URL },
                { title: 'Set 3: Git & Collaboration', link: DRIVE_ROOT_URL },
              ]
            }
          },
          {
            id: 'hist1', name: 'History of Algeria 1', code: 'HIST1', coeff: 1, credits: 1,
            objectives: 'Historical context and key events in the history of Algeria.',
            resources: {
              courses: [
                { title: 'Topic 1: 300 Years of Sovereignty', link: '/cours/history of algeria/تاريخ 1.pdf' },
                { title: 'Topic 2: Lesson 2', link: '/cours/history of algeria/درس2 تاريخ.pdf' },
                { title: 'Topic 3: Lesson 3', link: '/cours/history of algeria/محور3 تاريخ.pdf' },
              ],
              tds: [
                { title: 'Set 1: Ancient History', link: 'https://drive.google.com/drive/folders/1KLw2t9b0gqPO9uquAgVf65R-z2eb3usq' },
              ]
            }
          },
          {
            id: 'eng1', name: 'English 1', code: 'LANG1', coeff: 1, credits: 1,
            objectives: 'Technical English vocabulary, reading comprehension of scientific texts, and basic communication skills.',
            resources: {
              courses: [
                { title: 'Unit 1: Scientific Reading', link: DRIVE_ROOT_URL },
                { title: 'Unit 2: Technical Writing', link: DRIVE_ROOT_URL },
              ],
              tds: [
                { title: 'Set 1: Scientific Reading', link: DRIVE_ROOT_URL },
                { title: 'Set 2: Technical Writing', link: DRIVE_ROOT_URL },
              ]
            }
          },
        ]
      },
      {
        id: 's2',
        title: 'Semester 2 (CP1)',
        modules: [
          {
            id: 'math2', name: 'Analysis 2', code: 'MATH3', coeff: 5, credits: 5,
            objectives: 'Integration (Riemann), differential equations, and functions of several variables.'
          },
          {
            id: 'alg2', name: 'Algebra 2', code: 'MATH4', coeff: 4, credits: 4,
            objectives: 'Vector spaces, linear maps, matrices, determinants, and systems of linear equations.'
          },
          {
            id: 'prob2', name: 'Probability', code: 'PROB', coeff: 4, credits: 4,
            objectives: 'Advanced probability concepts, distributions, and applications in engineering contexts.'
          },
          {
            id: 'phys2', name: 'Physics 2 (Electricity)', code: 'PHYS2', coeff: 5, credits: 5,
            objectives: 'Electrostatics, magnetostatics, DC circuits, Kirchhoff laws, and introductory electromagnetism.'
          },
          {
            id: 'chem2', name: 'Chemistry 2', code: 'CHEM2', coeff: 4, credits: 4,
            objectives: 'Thermodynamics, first and second laws, entropy, enthalpy, and chemical equilibrium.',
            resources: {
              tds: [
                { title: 'Set 1: Thermodynamics', link: 'https://drive.google.com/drive/folders/1g7K-RKwFvj-GHmiYMPM41xWFmGn6Mmhh' },
              ]
            }
          },
          {
            id: 'info2', name: 'Algorithms and Data Structures', code: 'INFO2', coeff: 4, credits: 4,
            objectives: 'Advanced data structures (lists, stacks, queues), recursion, and algorithm efficiency.'
          },
          {
            id: 'cad', name: 'Computer Aided Design', code: 'CAD', coeff: 1, credits: 1,
            objectives: 'Introduction to CAD software tools for engineering design and modeling.'
          },
          {
            id: 'linux', name: 'Linux OS Fundamentals', code: 'LINUX', coeff: 1, credits: 1,
            objectives: 'Basics of the Linux operating system, command line interface, and file system management.'
          },
          {
            id: 'hist2', name: 'History of Algeria 2', code: 'HIST2', coeff: 1, credits: 1,
            objectives: 'Continuation of historical studies regarding Algeria.'
          },
          {
            id: 'eng2', name: 'English 2', code: 'LANG2', coeff: 1, credits: 1,
            objectives: 'Advanced technical English, report writing, and professional communication.'
          },
        ]
      },
      {
        id: 's3',
        title: 'Semester 3 (CP2)',
        modules: [
          {
            id: 'math3', name: 'Analysis 3', code: 'MATH5', coeff: 3, credits: 3,
            objectives: 'Series (numerical and function), power series, and Fourier series.'
          },
          {
            id: 'num1', name: 'Numerical Analysis 1', code: 'NUM1', coeff: 3, credits: 3,
            objectives: 'Numerical methods for root finding, linear systems, and error analysis.'
          },
          {
            id: 'phys3', name: 'Physics 3', code: 'PHYS3', coeff: 4, credits: 4,
            objectives: 'Vibrations and Waves: Mechanical and electrical oscillations, damped/forced vibrations.',
            resources: {
              tds: [
                { title: 'Set 1: Waves', link: 'https://drive.google.com/drive/folders/1g7K-RKwFvj-GHmiYMPM41xWFmGn6Mmhh' },
              ]
            }
          },
          {
            id: 'chem3', name: 'Chemistry 3', code: 'CHEM3', coeff: 3, credits: 3,
            objectives: 'Chemical kinetics, electrochemistry, and advanced solution chemistry.'
          },
          {
            id: 'mrb1', name: 'Mechanics of Rigid Bodies 1', code: 'MECH1', coeff: 3, credits: 3,
            objectives: 'Kinematics and dynamics of rigid bodies, moments of inertia, and static equilibrium.'
          },
          {
            id: 'elec1', name: 'General Electricity', code: 'ELEC1', coeff: 4, credits: 4,
            objectives: 'AC circuits, resonance, filters, and network theorems in frequency domain.'
          },
          {
            id: 'fluid', name: 'Fluid Mechanics', code: 'FLUID', coeff: 3, credits: 3,
            objectives: 'Properties of fluids, fluid statics, fluid dynamics, continuity and Bernoulli equations.'
          },
          {
            id: 'algo3', name: 'Adv. Data Structures & Algo', code: 'INFO3', coeff: 3, credits: 3,
            objectives: 'Trees, graphs, hashing, advanced sorting algorithms, and complexity analysis.'
          },
          {
            id: 'dig1', name: 'Digital Logic & Comb. Circuits', code: 'DIG1', coeff: 3, credits: 3,
            objectives: 'Boolean algebra, logic gates, minimization techniques, and combinational circuit design.'
          },
          {
            id: 'pat1', name: 'Patriotism and Citizenship 1', code: 'CIV1', coeff: 1, credits: 1,
            objectives: 'Concepts of citizenship, national identity, and civic responsibilities.'
          },
        ]
      },
      {
        id: 's4',
        title: 'Semester 4 (CP2)',
        modules: [
          {
            id: 'math4', name: 'Analysis 4', code: 'MATH6', coeff: 3, credits: 3,
            objectives: 'Complex analysis, holomorphic functions, residues, and integral transforms (Laplace/Fourier).'
          },
          {
            id: 'num2', name: 'Numerical Analysis 2', code: 'NUM2', coeff: 3, credits: 3,
            objectives: 'Numerical integration, differentiation, and solving differential equations numerically.'
          },
          {
            id: 'phys4', name: 'Physics 4', code: 'PHYS4', coeff: 4, credits: 4,
            objectives: 'Modern Physics and Optics: Quantum concepts, geometrical and wave optics.'
          },
          {
            id: 'chem4', name: 'Chemistry 4', code: 'CHEM4', coeff: 3, credits: 3,
            objectives: 'Organic chemistry fundamentals or specialized chemistry topics for engineering.'
          },
          {
            id: 'mrb2', name: 'Mechanics of Rigid Bodies 2', code: 'MECH2', coeff: 3, credits: 3,
            objectives: 'Advanced dynamics, gyroscopic motion, and lagrangian mechanics fundamentals.'
          },
          {
            id: 'elec2', name: 'General Electronics', code: 'ELEC2', coeff: 4, credits: 4,
            objectives: 'Diodes, transistors (BJT/FET), amplifiers, and operational amplifier applications.'
          },
          {
            id: 'som', name: 'Strength of Materials', code: 'RDM', coeff: 3, credits: 3,
            objectives: 'Stress, strain, torsion, bending, and deflection of beams.'
          },
          {
            id: 'oop', name: 'Object-Oriented Programming', code: 'OOP', coeff: 3, credits: 3,
            objectives: 'OOP principles: encapsulation, inheritance, polymorphism using Java or C++.'
          },
          {
            id: 'dig2', name: 'Digital Sys. & Seq. Circuits', code: 'DIG2', coeff: 3, credits: 3,
            objectives: 'Latches, flip-flops, counters, registers, and sequential state machine design.'
          },
          {
            id: 'pat2', name: 'Patriotism and Citizenship 2', code: 'CIV2', coeff: 1, credits: 1,
            objectives: 'Advanced topics in civic engagement, ethics, and national institutions.'
          },
        ]
      }
    ]
  },
  aes: {
    id: 'aes',
    label: 'Autonomous Embedded Systems',
    description: 'Design robust embedded systems for autonomous operation, focusing on firmware, sensors, and real-time processing.',
    advice: [
      "Hardware Languages\n\nDeep dive into C and C++. They are the language of the hardware. Most autonomous systems rely on firmware that needs to be extremely efficient and close to the memory management. Don't just learn the syntax; understand pointers and memory allocation.",
      "Timing is Everything\n\nUnderstand Real-Time Operating Systems (RTOS) thoroughly; timing is everything in autonomy. A delay of a few milliseconds in a sensor loop can cause a drone to crash. Practice with FreeRTOS or similar systems.",
      "Low Level Debugging\n\nGet comfortable with debugging low-level hardware issues using oscilloscopes and logic analyzers. Software debugging is just one part; you need to see the signals on the wire to truly understand what's happening."
    ],
    semesters: [
      {
        id: 'aes_s1',
        title: 'Semester 1 (S5)',
        modules: [
          { id: 'fe', name: 'Fundamental Electronics', coeff: 4, credits: 4 },
          { id: 'is', name: 'Instrumentation and Sensors', coeff: 4, credits: 4 },
          { id: 'mp', name: 'Microprocessors', coeff: 4, credits: 4 },
          { id: 'isp', name: 'Introduction to Signal Processing', coeff: 3, credits: 3 },
          { id: 'ose', name: 'Operating Systems Essentials', coeff: 3, credits: 3 },
          { id: 'netf', name: 'Networking Fundamentals', coeff: 3, credits: 3 },
          { id: 'iai', name: 'Introduction to Artificial Intelligence', coeff: 3, credits: 3 },
          { id: 'db', name: 'Database Essentials for Embedded Systems', coeff: 3, credits: 3 },
          { id: 'pcb', name: 'Reverse Engineering & PCB Design', coeff: 2, credits: 2 },
          { id: 'ees', name: 'Engineering Ethics and Safety', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s2',
        title: 'Semester 2 (S6)',
        modules: [
          { id: 'ef', name: 'Electronics Functions', coeff: 3, credits: 3 },
          { id: 'mc', name: 'Microcontrollers', coeff: 3, credits: 3 },
          { id: 'asa', name: 'Advanced Sensors and Actuators', coeff: 3, credits: 3 },
          { id: 'spe', name: 'Stochastic Processes and Estimation', coeff: 3, credits: 3 },
          { id: 'osp', name: 'Operating Systems for Programmers', coeff: 3, credits: 3 },
          { id: 'anet', name: 'Advanced Networking', coeff: 3, credits: 3 },
          { id: 'cs', name: 'Control Systems', coeff: 3, credits: 3 },
          { id: 'ml', name: 'Machine Learning', coeff: 3, credits: 3 },
          { id: 'rsus', name: 'Regulations & Standards for Unmanned System', coeff: 3, credits: 3 },
          { id: 'cp1', name: 'Capstone Project I', coeff: 2, credits: 2 },
          { id: 'ti1', name: 'Training Internship I', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s3',
        title: 'Semester 3 (S7)',
        modules: [
          { id: 'pe', name: 'Power Electronics', coeff: 3, credits: 3 },
          { id: 'incp', name: 'Industrial Networks and Communication Protocols', coeff: 3, credits: 3 },
          { id: 'dsp', name: 'Digital Signal Processors', coeff: 3, credits: 3 },
          { id: 'msdf', name: 'Multi-Sensor Data Fusion', coeff: 2, credits: 2 },
          { id: 'irtos', name: 'Introduction to Real-Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'df', name: 'Digital Filtering', coeff: 3, credits: 3 },
          { id: 'hmi', name: 'Human-Machine Interface for Embedded Systems', coeff: 2, credits: 2 },
          { id: 'dcs', name: 'Digital Control Systems', coeff: 3, credits: 3 },
          { id: 'dl', name: 'Deep Learning', coeff: 3, credits: 3 },
          { id: 'or', name: 'Operations Research', coeff: 2, credits: 2 },
          { id: 'ess', name: 'Introduction to Embedded Systems Security', coeff: 2, credits: 2 },
          { id: 'pme', name: 'Project Management for Engineers', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s4',
        title: 'Semester 4 (S8)',
        modules: [
          { id: 'iot', name: 'Internet of Things (IoT)', coeff: 3, credits: 3 },
          { id: 'em', name: 'Electric Machines', coeff: 3, credits: 3 },
          { id: 'fpga', name: 'FPGA and Hardware Design', coeff: 3, credits: 3 },
          { id: 'artos', name: 'Advanced Real-Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'cryp', name: 'Cryptography', coeff: 3, credits: 3 },
          { id: 'vip', name: 'Embedded Vision and Intelligent Image Processing', coeff: 2, credits: 2 },
          { id: 'rc', name: 'Regulation and Control', coeff: 3, credits: 3 },
          { id: 'robo', name: 'Fundamentals of Robotics', coeff: 3, credits: 3 },
          { id: 'wce', name: 'Wireless Communication Essentials', coeff: 3, credits: 3 },
          { id: 'eai', name: 'Embedded AI', coeff: 2, credits: 2 },
          { id: 'cp2', name: 'Capstone Project II', coeff: 2, credits: 2 },
          { id: 'ti2', name: 'Training Internship II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s5',
        title: 'Semester 5 (S9)',
        modules: [
          { id: 'posp', name: 'Program Optimization and System Performance', coeff: 3, credits: 3 },
          { id: 'psap', name: 'Power Supply and Auxiliary Peripherals', coeff: 3, credits: 3 },
          { id: 'gpu', name: 'Parallel Computing on GPUs', coeff: 3, credits: 3 },
          { id: 'eos', name: 'Embedded Operating Systems', coeff: 3, credits: 3 },
          { id: 'syse', name: 'Systems Security', coeff: 3, credits: 3 },
          { id: 'ns', name: 'Network Security', coeff: 3, credits: 3 },
          { id: 'rses', name: 'Reliability and Safety of Embedded Systems', coeff: 3, credits: 3 },
          { id: 'dces', name: 'Distributed Computing for Embedded Systems', coeff: 2, credits: 2 },
          { id: 'fan', name: 'Fundamentals of Autonomous Navigation', coeff: 2, credits: 2 },
          { id: 'qc', name: 'Introduction to Quantum Computing', coeff: 2, credits: 2 },
          { id: 'cp3', name: 'Capstone Project III', coeff: 2, credits: 2 },
          { id: 'esd', name: 'Entrepreneurship and Startup Development', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s6',
        title: 'Semester 6 (S10)',
        modules: [
          { id: 'pfe', name: 'Internship and Final Year Project', coeff: 30, credits: 30 },
        ]
      }
    ]
  },
  rasd: {
    id: 'rasd',
    label: 'Robotics & Autonomous Systems Design',
    description: 'Master the design, modeling, and control of intelligent robotic agents, from manipulators to mobile robots.',
    advice: [
      "Physics Engine\n\nMaster Robot Kinematics and Dynamics; they are the foundation of all motion. You need to be able to predict where the end-effector will be based on joint angles (Forward Kinematics) and vice versa (Inverse Kinematics).",
      "ROS Ecosystem\n\nGet proficient with ROS (Robot Operating System) as soon as possible. It is the industry standard for prototyping and deploying robotic applications. Start with ROS 2 and learn how nodes communicate.",
      "Math is Your Tool\n\nMatrix math and Linear Algebra are used daily in this specialty—keep them sharp. Transformations, rotations (quaternions), and state estimation all rely heavily on linear algebra."
    ],
    semesters: [
      {
        id: 'rasd_s1',
        title: 'Semester 1 (S5)',
        modules: [
          { id: 'isdc', name: 'Introduction to System Dynamics and Control', coeff: 4, credits: 4 },
          { id: 'dsp', name: 'Digital Signal Processing', coeff: 4, credits: 4 },
          { id: 'math', name: 'Mathematics for Engineers', coeff: 4, credits: 4 },
          { id: 'aae', name: 'Advanced Analog Electronics', coeff: 4, credits: 4 },
          { id: 'iee', name: 'Introduction to Electrical Engineering', coeff: 4, credits: 4 },
          { id: 'cms', name: 'Computational Modeling & Simulation for Engineering Design', coeff: 3, credits: 3 },
          { id: 'atd', name: 'Advanced Technical Design', coeff: 3, credits: 3 },
          { id: 'si', name: 'Sensors and Instrumentation', coeff: 2, credits: 2 },
          { id: 'ent', name: 'Introduction to Entrepreneurship', coeff: 1, credits: 1 },
          { id: 'bpr', name: 'Basic Principles of Robotics', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s2',
        title: 'Semester 2 (S6)',
        modules: [
          { id: 'iml', name: 'Introduction to Machine Learning', coeff: 4, credits: 4 },
          { id: 'opt', name: 'Optimization Techniques', coeff: 4, credits: 4 },
          { id: 'mpmc', name: 'Microprocessors and Microcontrollers', coeff: 4, credits: 4 },
          { id: 'dcs', name: 'Digital Control Systems', coeff: 4, credits: 4 },
          { id: 'ms', name: 'Mechanical Systems', coeff: 3, credits: 3 },
          { id: 'cad', name: 'Computer Aided Design (CAD)', coeff: 3, credits: 3 },
          { id: 'ep', name: 'Engineering Programming', coeff: 2, credits: 2 },
          { id: 'ear', name: 'Electric Actuators for Robotics', coeff: 2, credits: 2 },
          { id: 'uav', name: 'Introduction to UAVs Operations and Regulations', coeff: 1, credits: 1 },
          { id: 'cp1', name: 'Capstone Project I', coeff: 1, credits: 1 },
          { id: 'los', name: 'Linux Operating System', coeff: 1, credits: 1 },
          { id: 'ti1', name: 'Training Internship I', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s3',
        title: 'Semester 3 (S7)',
        modules: [
          { id: 'nocd', name: 'Nonlinear and Optimal Control Design', coeff: 4, credits: 4 },
          { id: 'mpm', name: 'Multi-Physics Modeling of Technological Systems', coeff: 4, credits: 4 },
          { id: 'rmp', name: 'Robot Motion Planning', coeff: 4, credits: 4 },
          { id: 'kdc', name: 'Kinematics, Dynamics and Control of Robot Manipulators', coeff: 4, credits: 4 },
          { id: 'pe', name: 'Power Electronics', coeff: 4, credits: 4 },
          { id: 'mr', name: 'Mobile Robotics', coeff: 3, credits: 3 },
          { id: 'ai', name: 'Advanced and Current Trends in AI', coeff: 2, credits: 2 },
          { id: 'ros', name: 'Robot Operating System & Computer Tools for Robotics', coeff: 2, credits: 2 },
          { id: 'me', name: 'Marketing and Economy', coeff: 1, credits: 1 },
          { id: 'sas', name: 'Sensors for Autonomous Systems', coeff: 1, credits: 1 },
          { id: 'cp2', name: 'Capstone Project II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s4',
        title: 'Semester 4 (S8)',
        modules: [
          { id: 'ia', name: 'Industrial Automation', coeff: 4, credits: 4 },
          { id: 'irc', name: 'Industrial Robots Control', coeff: 2, credits: 2 },
          { id: 'iot', name: 'Internet Of Things (IOT)', coeff: 4, credits: 4 },
          { id: 'uav2', name: 'UAV Flight Testing & Operations', coeff: 4, credits: 4 },
          { id: 'mat', name: 'Introduction to Materials & Mechanical Manufacturing Processes', coeff: 4, credits: 4 },
          { id: 'aes', name: 'Advanced Embedded Systems', coeff: 2, credits: 2 },
          { id: 'md', name: 'Machine Dynamics', coeff: 3, credits: 3 },
          { id: 'cio', name: 'Computational Intelligence for Optimization', coeff: 3, credits: 3 },
          { id: 'pm', name: 'Project Management', coeff: 1, credits: 1 },
          { id: 'rerp', name: 'Reverse Engineering and Rapid Prototyping', coeff: 1, credits: 1 },
          { id: 'i40', name: 'Introduction to Industry 4.0 and Smart Manufacturing', coeff: 1, credits: 1 },
          { id: 'ti2', name: 'Training Internship II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s5',
        title: 'Semester 5 (S9)',
        modules: [
          { id: 'aml', name: 'Advanced Machine Learning for Robotics', coeff: 4, credits: 4 },
          { id: 'dsab', name: 'Distributed Systems and Agent-Based Technologies', coeff: 4, credits: 4 },
          { id: 'hmi', name: 'Human-Machine / Machine-Machine Interaction', coeff: 3, credits: 3 },
          { id: 'cvr', name: 'Computer Vision for Robotics', coeff: 4, credits: 4 },
          { id: 'rtos', name: 'Real-Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'mar', name: 'Marine Robotics', coeff: 4, credits: 4 },
          { id: 'df', name: 'Data Fusion', coeff: 3, credits: 3 },
          { id: 'esd', name: 'Entrepreneurship & Startup Development', coeff: 1, credits: 1 },
          { id: 'qc', name: 'Quality Control', coeff: 1, credits: 1 },
          { id: 'sr', name: 'Service Robotics', coeff: 1, credits: 1 },
          { id: 'cs', name: 'Cybersecurity', coeff: 1, credits: 1 },
          { id: 'ti3', name: 'Training Internship III', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s6',
        title: 'Semester 6 (S10)',
        modules: [
          { id: 'pfe', name: 'Internship and Final Year Project', coeff: 30, credits: 30 },
        ]
      }
    ]
  },
  usnc: {
    id: 'usnc',
    label: 'Unmanned Systems Nav & Control',
    description: 'Specialty dealing with the guidance, navigation, and control systems of UAVs and other unmanned vehicles.',
    advice: [
      "Stability First\n\nMaster PID and State-Space control early for flight stability. Tuning a controller is an art as much as a science; understand the contribution of each term to the system response.",
      "Sensor Fusion\n\nUnderstand GPS and IMU sensor fusion (Kalman Filters) for reliable navigation. No sensor is perfect, so you must learn how to weigh their inputs based on uncertainty to get a clean state estimate.",
      "Aerodynamic Constraints\n\nStudy aerodynamics to understand why your control algorithms work (or don't). Gravity, lift, drag, and thrust all play a role in how your autopilot should behave."
    ],
    semesters: [
      {
        id: 'usnc_s1',
        title: 'Semester 1 (S5)',
        modules: [
          { id: 'lcs', name: 'Linear Control Systems', coeff: 4, credits: 4 },
          { id: 'esd', name: 'Embedded Systems Design', coeff: 4, credits: 4 },
          { id: 'ae', name: 'Advanced Electronics', coeff: 4, credits: 4 },
          { id: 'is', name: 'Instrumentation and Sensors', coeff: 4, credits: 4 },
          { id: 'dsp', name: 'Digital Signal Processing', coeff: 4, credits: 4 },
          { id: 'lin', name: 'Introduction to Linux', coeff: 3, credits: 3 },
          { id: 'opt', name: 'Optimization Techniques', coeff: 3, credits: 3 },
          { id: 'esa', name: 'Ethics and Safety in AI and Robotics', coeff: 2, credits: 2 },
          { id: 'pfa', name: 'Principles of Flight and Aeronautics', coeff: 2, credits: 2 },
        ]
      },
      {
        id: 'usnc_s2',
        title: 'Semester 2 (S6)',
        modules: [
          { id: 'ssac', name: 'State Space Analysis and Control Design', coeff: 4, credits: 4 },
          { id: 'kdus', name: 'Kinematics and Dynamics of Unmanned Systems', coeff: 3, credits: 3 },
          { id: 'mcrm', name: 'Modeling and Control of Robotic Manipulators', coeff: 3, credits: 3 },
          { id: 'act', name: 'Actuators', coeff: 3, credits: 3 },
          { id: 'com', name: 'Communication Systems', coeff: 3, credits: 3 },
          { id: 'rtos', name: 'Real Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'pe', name: 'Power Electronics', coeff: 3, credits: 3 },
          { id: 'iml', name: 'Introduction to Machine Learning', coeff: 3, credits: 3 },
          { id: 'rsus', name: 'Regulations and Standards for Unmanned Systems', coeff: 2, credits: 2 },
          { id: 'cp1', name: 'Capstone Project I', coeff: 2, credits: 2 },
          { id: 'ti1', name: 'Training Internship I', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'usnc_s3',
        title: 'Semester 3 (S7)',
        modules: [
          { id: 'mcs', name: 'Multivariable Control Systems Design', coeff: 3, credits: 3 },
          { id: 'cv', name: 'Computer Vision', coeff: 3, credits: 3 },
          { id: 'sid', name: 'System Identification', coeff: 3, credits: 3 },
          { id: 'fan', name: 'Fundamentals of Autonomous Navigation', coeff: 3, credits: 3 },
          { id: 'fre', name: 'Filtering and Recursive Estimation', coeff: 3, credits: 3 },
          { id: 'aesd', name: 'Advanced Embedded Systems Design', coeff: 3, credits: 3 },
          { id: 'nndl', name: 'Neural Networks and Deep Learning', coeff: 3, credits: 3 },
          { id: 'ap', name: 'Antennas and Propagation', coeff: 3, credits: 3 },
          { id: 'mcad', name: 'Mechanical CAD for Robotics', coeff: 2, credits: 2 },
          { id: 'pm', name: 'Project Management for Engineers', coeff: 2, credits: 2 },
          { id: 'cp2', name: 'Capstone Project II', coeff: 2, credits: 2 },
        ]
      },
      {
        id: 'usnc_s4',
        title: 'Semester 4 (S8)',
        modules: [
          { id: 'nlcs', name: 'Non Linear Control Systems', coeff: 3, credits: 3 },
          { id: 'oc', name: 'Optimal Control', coeff: 3, credits: 3 },
          { id: 'aai', name: 'Advanced AI Techniques', coeff: 3, credits: 3 },
          { id: 'ans', name: 'Advanced Navigation Systems', coeff: 3, credits: 3 },
          { id: 'ah', name: 'Aerodynamics and Hydrodynamics', coeff: 3, credits: 3 },
          { id: 'hri', name: 'Human-Robot Interaction', coeff: 3, credits: 3 },
          { id: 'uav', name: 'UAV Flight Testing and Operations', coeff: 3, credits: 3 },
          { id: 'ps', name: 'Propulsion Systems', coeff: 3, credits: 3 },
          { id: 'cus', name: 'Cybersecurity for Unmanned Systems', coeff: 3, credits: 3 },
          { id: 'rerp', name: 'Reverse Engineering and Rapid Prototyping', coeff: 1, credits: 1 },
          { id: 'cp3', name: 'Capstone Project III', coeff: 1, credits: 1 },
          { id: 'ti2', name: 'Training Internship II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'usnc_s5',
        title: 'Semester 5 (S9)',
        modules: [
          { id: 'auas', name: 'Advanced UAS Programming', coeff: 4, credits: 4 },
          { id: 'fae', name: 'Fundamentals of Aerospace Engineering', coeff: 4, credits: 4 },
          { id: 'eves', name: 'Electric Vehicles and Energy Systems', coeff: 3, credits: 3 },
          { id: 'rl', name: 'Reinforcement Learning', coeff: 3, credits: 3 },
          { id: 'srma', name: 'Swarm Robotics and Multi-Agent Systems', coeff: 3, credits: 3 },
          { id: 'uspc', name: 'Unmanned Systems Practical Cases', coeff: 3, credits: 3 },
          { id: 'bbr', name: 'Biomimetisme and Bio-inspired Robotics', coeff: 3, credits: 3 },
          { id: 'ia', name: 'Industrial Automation', coeff: 3, credits: 3 },
          { id: 'ti3', name: 'Training Internship III', coeff: 1, credits: 1 },
          { id: 'cp4', name: 'Capstone Project IV', coeff: 2, credits: 2 },
          { id: 'acr', name: 'Academic Communication and Research', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'usnc_s6',
        title: 'Semester 6 (S10)',
        modules: [
          { id: 'pfe', name: 'Internship and Final Year Project', coeff: 30, credits: 30 },
        ]
      }
    ]
  }
};

