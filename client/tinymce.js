Template.tinymce.helpers({
    id: ()=>new Mongo.ObjectID().toJSONValue()
});
Template.tinymce.onRendered(()=> {
    var teaxareaId = Template.instance().find('textarea').id;
    tinymce.init(
        _.extend(
            Template.instance().data || {},
            {
                selector: '#' + teaxareaId
            }
        )
    );
});