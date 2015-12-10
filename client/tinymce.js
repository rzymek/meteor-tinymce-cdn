Template.tinymce.helpers({
    id: function () {
        return new Mongo.ObjectID().toJSONValue();
    }
});
Template.tinymce.onRendered(function () {
    var teaxareaId = Template.instance().find('textarea').id;
    tinymce.init(
        _.extend(
            Template.instance().data || {},
            { selector: '#' + teaxareaId }
        )
    );
});