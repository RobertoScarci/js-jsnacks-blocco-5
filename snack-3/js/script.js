const listBrowser = {
    'tab': ['Facebook', 'GitHub', 
    'Gmail', 'Youtube', 'Instagram', 
    'Linkedin', 'Zoom'],
    'activeTab': 0
}

const social = [
    'facebook',
    'youtube',
    'instagram',
    'linkedin'
]

listBrowser.tab = listBrowser.tab.filter((element) => {
    if( !social.includes(element.toLowerCase())){
        return true;
    }
});

console.log(listBrowser)