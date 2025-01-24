function onLoadForm(){
    window.this = this;
}

function onEditClick(prop) {
    let primaryKey = prop.CandidatesId;
    this.session.CandidatesVS = primaryKey;
    this.parent.menuClick({ FormId: "Page_Editing" });
}