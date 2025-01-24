function onEditClick(prop) {
    let primaryKey = prop.Candidates_formId;
    this.session.Candidates_formId = primaryKey;
    this.parent.menuClick({ FormId: "new_candidates" });
}
