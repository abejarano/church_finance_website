<template>
  <section class="dashboard-section section">
    <div class="container">
      <div class="dashboard-content">
        <div class="dashboard-text">
          <span class="pre-title">{{ $t('dashboard.preTitle') }}</span>
          <h2>{{ $t('dashboard.title') }}</h2>
          <p>{{ $t('dashboard.description') }}</p>
          
          <div class="feature-list">
            <div class="feature-item">
              <div class="feature-icon">
                <font-awesome-icon :icon="['fas', 'chart-pie']" />
              </div>
              <div class="feature-info">
                <h3>{{ $t('dashboard.feature1.title') }}</h3>
                <p>{{ $t('dashboard.feature1.description') }}</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <font-awesome-icon :icon="['fas', 'chart-line']" />
              </div>
              <div class="feature-info">
                <h3>{{ $t('dashboard.feature2.title') }}</h3>
                <p>{{ $t('dashboard.feature2.description') }}</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <font-awesome-icon :icon="['fas', 'bell']" />
              </div>
              <div class="feature-info">
                <h3>{{ $t('dashboard.feature3.title') }}</h3>
                <p>{{ $t('dashboard.feature3.description') }}</p>
              </div>
            </div>
          </div>
          
          <CtaButton 
            :text="$t('dashboard.ctaButton')" 
            variant="primary" 
            withIcon 
            @click="scrollToContact" 
          />
        </div>
        
        <div class="dashboard-preview">
          <div class="dashboard-mockup">
            <div class="mockup-header">
              <div class="mockup-tabs">
                <div class="tab active">Dashboard</div>
                <div class="tab">Ofertas</div>
                <div class="tab">Gastos</div>
              </div>
              <div class="mockup-user">
                <font-awesome-icon :icon="['fas', 'user-circle']" />
              </div>
            </div>
            
            <div class="mockup-content">
              <div class="row">
                <div class="metric-card">
                  <div class="metric-icon" style="background-color: rgba(88, 80, 236, 0.1); color: #5850EC;">
                    <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />
                  </div>
                  <div class="metric-content">
                    <h4>{{ $t('dashboard.card1.title') }}</h4>
                    <div class="metric-value">R$ 35.891</div>
                    <div class="metric-trend up">
                      <font-awesome-icon :icon="['fas', 'arrow-up']" />
                      <span>12.5%</span>
                    </div>
                  </div>
                </div>
                
                <div class="metric-card">
                  <div class="metric-icon" style="background-color: rgba(42, 199, 112, 0.1); color: #2AC770;">
                    <font-awesome-icon :icon="['fas', 'users']" />
                  </div>
                  <div class="metric-content">
                    <h4>{{ $t('dashboard.card2.title') }}</h4>
                    <div class="metric-value">352</div>
                    <div class="metric-trend up">
                      <font-awesome-icon :icon="['fas', 'arrow-up']" />
                      <span>5.2%</span>
                    </div>
                  </div>
                </div>
                
                <div class="metric-card">
                  <div class="metric-icon" style="background-color: rgba(255, 159, 67, 0.1); color: #FF9F43;">
                    <font-awesome-icon :icon="['fas', 'wallet']" />
                  </div>
                  <div class="metric-content">
                    <h4>{{ $t('dashboard.card3.title') }}</h4>
                    <div class="metric-value">R$ 19.245</div>
                    <div class="metric-trend down">
                      <font-awesome-icon :icon="['fas', 'arrow-down']" />
                      <span>3.8%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="chart-card">
                  <div class="card-header">
                    <h4>{{ $t('dashboard.chart1.title') }}</h4>
                    <div class="card-dropdown">
                      <span>Este año</span>
                      <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </div>
                  </div>
                  <div class="chart-container">
                    <div class="chart-bars">
                      <div v-for="month in 6" :key="month" class="month-group">
                        <div class="chart-bar income" :style="`height: ${45 + Math.random() * 35}%`"></div>
                        <div class="chart-bar expenses" :style="`height: ${30 + Math.random() * 25}%`"></div>
                        <div class="month-label">{{ ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][month-1] }}</div>
                      </div>
                    </div>
                    <div class="chart-legend">
                      <div class="legend-item">
                        <div class="legend-color income"></div>
                        <span>{{ $t('dashboard.chart1.income') }}</span>
                      </div>
                      <div class="legend-item">
                        <div class="legend-color expenses"></div>
                        <span>{{ $t('dashboard.chart1.expenses') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="chart-card">
                  <div class="card-header">
                    <h4>{{ $t('dashboard.chart2.title') }}</h4>
                    <div class="card-dropdown">
                      <span>Jun 2023</span>
                      <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </div>
                  </div>
                  <div class="pie-chart-container">
                    <div class="pie-chart">
                      <div class="pie-segment" style="--percentage: 40%; --color: #5850EC; --offset: 0;"></div>
                      <div class="pie-segment" style="--percentage: 25%; --color: #2AC770; --offset: 40%;"></div>
                      <div class="pie-segment" style="--percentage: 20%; --color: #FF9F43; --offset: 65%;"></div>
                      <div class="pie-segment" style="--percentage: 15%; --color: #0EA5E9; --offset: 85%;"></div>
                    </div>
                    <div class="pie-chart-legend">
                      <div class="legend-item">
                        <div class="legend-color" style="background-color: #5850EC;"></div>
                        <span>{{ $t('dashboard.chart2.item1') }} (40%)</span>
                      </div>
                      <div class="legend-item">
                        <div class="legend-color" style="background-color: #2AC770;"></div>
                        <span>{{ $t('dashboard.chart2.item2') }} (25%)</span>
                      </div>
                      <div class="legend-item">
                        <div class="legend-color" style="background-color: #FF9F43;"></div>
                        <span>{{ $t('dashboard.chart2.item3') }} (20%)</span>
                      </div>
                      <div class="legend-item">
                        <div class="legend-color" style="background-color: #0EA5E9;"></div>
                        <span>{{ $t('dashboard.chart2.item4') }} (15%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="recent-transactions">
                  <div class="card-header">
                    <h4>{{ $t('dashboard.recent.title') }}</h4>
                    <a href="#" class="view-all">{{ $t('dashboard.recent.viewAll') }}</a>
                  </div>
                  <div class="transactions-list">
                    <div class="transaction-item">
                      <div class="transaction-icon" style="background-color: rgba(88, 80, 236, 0.1);">
                        <font-awesome-icon :icon="['fas', 'hand-holding-heart']" style="color: #5850EC;" />
                      </div>
                      <div class="transaction-info">
                        <h5>{{ $t('dashboard.recent.item1.title') }}</h5>
                        <span>{{ $t('dashboard.recent.item1.date') }}</span>
                      </div>
                      <div class="transaction-amount income">
                        +R$ 12.350
                      </div>
                    </div>
                    <div class="transaction-item">
                      <div class="transaction-icon" style="background-color: rgba(255, 159, 67, 0.1);">
                        <font-awesome-icon :icon="['fas', 'lightbulb']" style="color: #FF9F43;" />
                      </div>
                      <div class="transaction-info">
                        <h5>{{ $t('dashboard.recent.item2.title') }}</h5>
                        <span>{{ $t('dashboard.recent.item2.date') }}</span>
                      </div>
                      <div class="transaction-amount expense">
                        -R$ 850
                      </div>
                    </div>
                    <div class="transaction-item">
                      <div class="transaction-icon" style="background-color: rgba(42, 199, 112, 0.1);">
                        <font-awesome-icon :icon="['fas', 'gift']" style="color: #2AC770;" />
                      </div>
                      <div class="transaction-info">
                        <h5>{{ $t('dashboard.recent.item3.title') }}</h5>
                        <span>{{ $t('dashboard.recent.item3.date') }}</span>
                      </div>
                      <div class="transaction-amount income">
                        +R$ 5.400
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faChartPie, 
  faChartLine, 
  faBell, 
  faUserCircle, 
  faHandHoldingDollar, 
  faUsers, 
  faWallet,
  faArrowUp,
  faArrowDown,
  faChevronDown,
  faHandHoldingHeart,
  faLightbulb,
  faGift
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CtaButton from '@/components/common/CtaButton.vue';

// Add icons to library
library.add(
  faChartPie, 
  faChartLine, 
  faBell, 
  faUserCircle, 
  faHandHoldingDollar, 
  faUsers, 
  faWallet,
  faArrowUp,
  faArrowDown,
  faChevronDown,
  faHandHoldingHeart,
  faLightbulb,
  faGift
);

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "sass:math";
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/functions" as *;

.dashboard-section {
  background-color: $light;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    right: -50px;
    bottom: -50px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba($tertiary, 0.08) 0%, rgba($tertiary, 0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .dashboard-content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: $spacing-3xl;
    align-items: center;
    position: relative;
    z-index: 1;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }
  
  .dashboard-text {
    .pre-title {
      display: inline-block;
      background-color: rgba($primary, 0.1);
      color: $primary;
      font-weight: 500;
      font-size: $font-size-xs;
      padding: $spacing-xs $spacing-md;
      border-radius: $border-radius-full;
      margin-bottom: $spacing-md;
    }
    
    h2 {
      font-size: $font-size-3xl;
      margin-bottom: $spacing-md;
      color: $text;
      
      @media (max-width: $breakpoint-md) {
        font-size: $font-size-2xl;
      }
    }
    
    p {
      color: $dark-gray;
      margin-bottom: $spacing-xl;
    }
    
    .feature-list {
      margin-bottom: $spacing-xl;
      
      .feature-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: $spacing-lg;
        
        .feature-icon {
          width: 36px;
          height: 36px;
          background-color: rgba($primary, 0.1);
          border-radius: $border-radius-md;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $primary;
          margin-right: $spacing-md;
          flex-shrink: 0;
        }
        
        .feature-info {
          h3 {
            font-size: $font-size-base;
            font-weight: 600;
            margin-bottom: $spacing-xs;
            color: $text;
          }
          
          p {
            font-size: $font-size-xs;
            margin-bottom: 0;
          }
        }
      }
    }
  }
  
  .dashboard-preview {
    position: relative;
    
    @media (max-width: $breakpoint-lg) {
      margin-top: $spacing-xl;
    }
  }
  
  .dashboard-mockup {
    background-color: white;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-elevation;
    border: 1px solid $gray;
    overflow: hidden;
    max-width: 600px;
    margin: 0 auto;
    
    .mockup-header {
      background-color: #f8f9fa;
      padding: $spacing-md;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $gray;
      
      .mockup-tabs {
        display: flex;
        gap: $spacing-md;
        
        .tab {
          font-size: $font-size-xs;
          font-weight: 500;
          padding: $spacing-xs $spacing-md;
          border-radius: $border-radius-md;
          cursor: pointer;
          
          &.active {
            background-color: rgba($primary, 0.1);
            color: $primary;
          }
        }
      }
      
      .mockup-user {
        font-size: 24px;
        color: $dark-gray;
      }
    }
    
    .mockup-content {
      padding: $spacing-lg;
      
      .row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: $spacing-md;
        margin-bottom: $spacing-lg;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
      
      .metric-card {
        background-color: $light;
        border-radius: $border-radius-md;
        padding: $spacing-md;
        display: flex;
        align-items: center;
        border: 1px solid $gray;
        
        .metric-icon {
          width: 42px;
          height: 42px;
          border-radius: $border-radius-md;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: $spacing-md;
          flex-shrink: 0;
        }
        
        .metric-content {
          flex: 1;
          
          h4 {
            font-size: $font-size-xs;
            color: $dark-gray;
            margin-bottom: 4px;
          }
          
          .metric-value {
            font-size: $font-size-lg;
            font-weight: 600;
            margin-bottom: 2px;
          }
          
          .metric-trend {
            font-size: $font-size-xs;
            display: flex;
            align-items: center;
            gap: 4px;
            
            &.up {
              color: $secondary;
            }
            
            &.down {
              color: #f43f5e;
            }
          }
        }
      }
      
      .chart-card {
        background-color: $light;
        border-radius: $border-radius-md;
        border: 1px solid $gray;
        overflow: hidden;
        
        .card-header {
          padding: $spacing-md;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid $gray;
          
          h4 {
            font-size: $font-size-base;
            font-weight: 500;
          }
          
          .card-dropdown {
            display: flex;
            align-items: center;
            gap: $spacing-xs;
            font-size: $font-size-xs;
            color: $dark-gray;
            cursor: pointer;
          }
        }
        
        .chart-container {
          padding: $spacing-md;
          height: 200px;
          
          .chart-bars {
            height: 160px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding-bottom: $spacing-md;
            
            .month-group {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              position: relative;
              
              .chart-bar {
                width: 8px;
                border-radius: $border-radius-sm;
                margin: 0 2px;
                
                &.income {
                  background: linear-gradient(180deg, $primary 0%, color.adjust($primary, $lightness: 20%) 100%);
                  margin-bottom: 4px;
                }
                
                &.expenses {
                  background: linear-gradient(180deg, $accent 0%, color.adjust($accent, $lightness: 20%) 100%);
                }
              }
              
              .month-label {
                position: absolute;
                bottom: -20px;
                font-size: 10px;
                color: $dark-gray;
              }
            }
          }
          
          .chart-legend {
            display: flex;
            justify-content: center;
            gap: $spacing-lg;
            margin-top: $spacing-md;
            
            .legend-item {
              display: flex;
              align-items: center;
              gap: $spacing-xs;
              font-size: $font-size-xs;
              
              .legend-color {
                width: 12px;
                height: 12px;
                border-radius: 2px;
                
                &.income {
                  background: linear-gradient(180deg, $primary 0%, color.adjust($primary, $lightness: 20%) 100%);
                }
                
                &.expenses {
                  background: linear-gradient(180deg, $accent 0%, color.adjust($accent, $lightness: 20%) 100%);
                }
              }
            }
          }
        }
        
        .pie-chart-container {
          display: flex;
          padding: $spacing-md;
          height: 200px;
          align-items: center;
          
          .pie-chart {
            width: 140px;
            height: 140px;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            
            .pie-segment {
              position: absolute;
              width: 100%;
              height: 100%;
              transform: rotate(calc(3.6deg * var(--offset)));
              transform-origin: 50% 50%;
              
              &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                transform: rotate(calc(3.6deg * var(--percentage)));
                background-color: var(--color);
                transform-origin: 50% 50%;
              }
            }
          }
          
          .pie-chart-legend {
            flex: 1;
            margin-left: $spacing-lg;
            
            .legend-item {
              display: flex;
              align-items: center;
              gap: $spacing-xs;
              font-size: $font-size-xs;
              margin-bottom: $spacing-sm;
              
              .legend-color {
                width: 12px;
                height: 12px;
                border-radius: 2px;
              }
            }
          }
        }
      }
      
      .recent-transactions {
        grid-column: 1 / -1;
        background-color: $light;
        border-radius: $border-radius-md;
        border: 1px solid $gray;
        overflow: hidden;
        
        .card-header {
          padding: $spacing-md;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid $gray;
          
          h4 {
            font-size: $font-size-base;
            font-weight: 500;
          }
          
          .view-all {
            font-size: $font-size-xs;
            color: $primary;
            text-decoration: none;
            
            &:hover {
              text-decoration: underline;
            }
          }
        }
        
        .transactions-list {
          padding: $spacing-md;
          
          .transaction-item {
            display: flex;
            align-items: center;
            padding: $spacing-sm;
            border-bottom: 1px solid $light-gray;
            
            &:last-child {
              border-bottom: none;
            }
            
            .transaction-icon {
              width: 40px;
              height: 40px;
              border-radius: $border-radius-md;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: $spacing-md;
              flex-shrink: 0;
            }
            
            .transaction-info {
              flex: 1;
              
              h5 {
                font-size: $font-size-base;
                font-weight: 500;
                margin-bottom: 2px;
              }
              
              span {
                font-size: $font-size-xs;
                color: $dark-gray;
              }
            }
            
            .transaction-amount {
              font-weight: 600;
              
              &.income {
                color: $secondary;
              }
              
              &.expense {
                color: #f43f5e;
              }
            }
          }
        }
      }
    }
  }
}
</style> 