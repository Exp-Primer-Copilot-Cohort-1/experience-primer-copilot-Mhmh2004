function skillsMember() {
    return {
        restrict: 'E',
        templateurl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member: ''
        }
    };
}