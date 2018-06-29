# How to migrate

## ng-model

### AngularJS

```html
<input type="text" ng-model="$ctrl.nameFilter" />

<tr ng-repeat="driver in $ctrl.driversList | filter: $ctrl.searchFilter">
    <td>{{$index + 1}}</td>
    <td>
        <a ng-href="#/drivers/{{driver.driverId}}">
            {{driver.givenName}}&nbsp;{{driver.familyName}}
        </a>
    </td>
</tr>
```

```js
export default function driversController($scope, apiService) {
    $scope.nameFilter = null;
    $scope.searchFilter = driver => {
        const re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.givenName) || re.test(driver.familyName);
    };
}
```

### React

```jsx
export default class Overview extends Component {
    state = {
        drivers: [],
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        let filteredDrivers = this.state.drivers.filter(driver => {
            const re = new RegExp(this.state.nameFilter, 'i');
            return (!this.state.nameFilter || re.test(driver.givenName) || re.test(driver.familyName));
        });
        return (
            <input
                className="form-control"
                type="text"
                name="nameFilter"
                onChange={this.handleChange}
            />
            <tbody ui-sortable="true">
                {filteredDrivers && filteredDrivers.map((driver, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{driver.givenName} {driver.familyName}</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
}
```
