$(function () {
   const prevRanges2 = {
      'All time': [moment().subtract(1, 'year').startOf('year'), moment().endOf('year')],
      'Today': [moment().startOf('day'), moment().add(1, 'day').startOf('day')],
      'This Week': [moment().startOf('week'), moment().add(1, 'week').startOf('week')],
      'This Month': [moment().startOf('month'), moment().add(1, 'month').startOf('month')],
      'This Year': [moment().startOf('year'), moment().add(1, 'year').startOf('year')],

      'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().startOf('day')],
      'Last Week': [moment().subtract(1, 'week').startOf('week'), moment().startOf('week')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().startOf('month')],
      'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().startOf('year')],

      'Last 24 Hours': [moment().subtract(23, 'hours'), moment()],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],

   };
   $('input[name="daterange"]').daterangepicker({
      showDropdowns: true,
      showWeekNumbers: true,
      timePicker: true,
      timePicker24Hour: true,
      alwaysShowCalendars: true,
      linkedCalendars: false,
      showCustomRangeLabel: false,
      // startDate: prevRanges['This Year'][0],
      // endDate: prevRanges['This Year'][1],

      minYear: 2020,
      maxYear: new Date().getFullYear() + 1,
      minDate: '01-01-2020',
      // locale: { format: SHORT_DATE_FORMAT + ' ' + SHORT_TIME_FORMAT },
      ranges: prevRanges2,
   });
});