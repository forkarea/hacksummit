import d3 from 'd3';
import template from './skillValueBadge.html'

export default ngInject(() => {
  return {
    restrict: 'A',
    template,
    scope: {
      data: '='
    },
    link: (scope, element) => {

    }
  };
});
