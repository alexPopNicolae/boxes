import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closed: true
        }
        
        this.closeArticle = this.closeArticle.bind(this);
        this.openArticle = this.openArticle.bind(this);
    }

    closeArticle (e) {
       this.setState({
           closed:true
       })
    }

    openArticle () {
        console.log('merge1')
        this.setState({
            closed:false
        });
    }

    render() {
        let className = this.state.closed ? 'expandable_article' : 'expandable_article opened';
        return(
        <div className={className}>
           
            <div className='intro'>
            <h1  onClick={this.openArticle} className='title'>5 pasi simplii ca sa ajung un master CSS</h1>
            <p className='description'>Pentru a deveni un profesionist in css cel mai probabil
                trebui sa faci inveti bazele si mai apoi sa exersezi mult. Sa incerci sa faci tot felul 
                de chestii interesante. 
            </p>
            </div>
             {this.state.closed ? null
                :
            <div className='full_article'>
                <div className='container'>
                {this.state.closed ? null: <div onClick={this.closeArticle} className='close_button'>X</div>}
                <h1 className='title'>5 pasi simplii ca sa ajung un master CSS</h1>
                Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.
                De ce îl folosim?
                E un fapt bine stabilit că cititorul va fi sustras de conţinutul citibil al unei pagini atunci când se uită la aşezarea în pagină. Scopul utilizării a Lorem Ipsum, este acela că are o distribuţie a literelor mai mult sau mai puţin normale, faţă de utilizarea a ceva de genul "Conţinut aici, conţinut acolo", făcându-l să arate ca o engleză citibilă. Multe pachete de publicare pentru calculator şi editoare de pagini web folosesc acum Lorem Ipsum ca model standard de text, iar o cautare de "lorem ipsum" va rezulta în o mulţime de site-uri web în dezvoltare. Pe parcursul anilor, diferite versiuni au evoluat, uneori din intâmplare, uneori intenţionat (infiltrându-se elemente de umor sau altceva de acest gen).
                De unde provine?
                În ciuda opiniei publice, Lorem Ipsum nu e un simplu text fără sens. El îşi are rădăcinile într-o bucată a literaturii clasice latine din anul 45 î.e.n., făcând-o să aibă mai bine de 2000 ani. Profesorul universitar de latină de la colegiul Hampden-Sydney din Virginia, Richard McClintock, a căutat în bibliografie unul din cele mai rar folosite cuvinte latine "consectetur", întâlnit în pasajul Lorem Ipsum, şi căutând citate ale cuvântului respectiv în literatura clasică, a descoperit la modul cel mai sigur sursa provenienţei textului. Lorem Ipsum provine din secţiunile 1.10.32 şi 1.10.33 din "de Finibus Bonorum et Malorum" (Extremele Binelui şi ale Răului) de Cicerone, scrisă în anul 45 î.e.n. Această carte este un tratat în teoria eticii care a fost foarte popular în perioada Renasterii. Primul rând din Lorem Ipsum, "Lorem ipsum dolor sit amet...", a fost luat dintr-un rând din secţiunea 1.10.32.
                Pasajul standard de Lorem Ipsum folosit încă din secolul al XVI-lea este reprodus mai jos pentru cei interesaţi. Secţiunile 1.10.32 şi 1.10.33 din "de Finibus Bonorum et Malorum" de Cicerone sunt de asemenea reproduse în forma lor originală, impreună cu versiunile lor în engleză din traducerea de către H. Rackham din 1914.
                </div>
            </div>
            }
        </div>
        );
    }
}
export default Article